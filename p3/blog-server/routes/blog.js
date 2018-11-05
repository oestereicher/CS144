let express = require('express');
let router = express.Router();
let app = express();
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:27017';
let dbName = 'BlogServer';
let commonmark = require('commonmark');
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var parsed;
var parsedString;

let posts;

app.set('view engine', 'ejs');
app.set('views', '.');
router.get('/:username', (req, res) => {
	console.log(req.params.username);
	console.log(req.query.start);
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server in blog.js");
        let db = client.db(dbName);
        let query = {'username': req.params.username};
        db.collection("Posts").find(query).sort({postid: 1}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            posts = result;
            let renderObj = new Object();
            renderObj.title = "Posts";
            renderObj.postTitles = new Array();
            renderObj.posts = new Array();
            renderObj.username = req.params.username;
            renderObj.morePosts = false;
            let firstPost = 0;
            if (req.query.start) {
                while (firstPost < posts.length && posts[firstPost].postid < req.query.start) {
                    firstPost++;
                }
            }
            for (let i = firstPost; i < firstPost + 5 && i < posts.length; i++) {
                parsed = reader.parse(posts[i].title);
                parsedString = writer.render(parsed);
                renderObj.postTitles.push(parsedString);

                parsed = reader.parse(posts[i].body);
                parsedString = writer.render(parsed);
                renderObj.posts.push(parsedString);
            }
            if (firstPost < posts.length - 5) { //means there are more posts past what is displayed
                renderObj.nextPostId = posts[firstPost + 5].postid;
                renderObj.morePosts = true;
            }
            res.render('blog', renderObj);
            client.close();
        });
    });

});

/* I don't think this is necessary
router.get('/:username/:postid', (req, res) => {
    let renderObj = new Object();
    renderObj.title = "Posts";
    renderObj.postTitles = new Array();
    renderObj.posts = new Array();
    let firstPost = 0;
    while (firstPost < posts.length  && posts[firstPost].postid < req.params.postid) {
    	firstPost++;
	}
    for (let i = firstPost; i < firstPost + 5 && i < posts.length; i++) {
        renderObj.postTitles.push(posts[i].title);
        renderObj.posts.push(posts[i].body);
    }
    res.render('blog', renderObj);
});*/

module.exports = router;