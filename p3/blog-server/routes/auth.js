var createError = require('http-errors');
let express = require('express');
let router = express.Router();
let app = express();
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:27017';
let dbName = 'BlogServer';
let jwt = require('jsonwebtoken')
let token;
var verifyToken = require('./verifyToken')
let cookieParser = require('cookie-parser');
var config = require('../config')

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.set('view engine', 'ejs');
app.set('views', '.');
app.use(cookieParser());

router.get('/login', (req, res) => {
    let redirect = "";
    if (req.body.redirect) {
        redirect = req.body.redirect;
    }
    console.log(redirect)
    res.render('login', {'redirect': redirect});
});


//note: i think there's an issue bc the mongodb stuff is nonblocking
//and somehow we gotta write a callback function so that stuff doesn't
//happen in the wrong order
//https://stackoverflow.com/questions/12030248/what-is-the-right-way-to-make-a-synchronous-mongodb-query-in-node-js
router.post('/login', (req, res, next) => {
    let user = req.body.username;
    let pass = req.body.password;
    let redirect = req.body.redirect;
    console.log(user, pass, redirect)
    //checking to make sure that a username and password were entered
    //unsure if this is correct
   if (!user || !pass) {
       return res.status(401).send({ auth: false, token: null });
       //res.render('login', {});
   }
   else {
       let hashword = new Array();
       MongoClient.connect(url, function(err, client) {
           assert.equal(null, err);
           console.log("Connected correctly to server in auth.js");
           let db = client.db(dbName);
           let query = {'username': user};
           db.collection("Users").find(query, {
               projection: {_id: 0, username: 0}
           }).toArray(function(err, result) {
               if (err) throw err;
               console.log(result);
               hashword = result;
               if (hashword.length != 1) { //user not found
                   next(createError(401));
               }
               else {
                   bcrypt.compare(pass, hashword[0].password, function (err, response) {
                       assert.equal(null, err);
                       if (!response) { //password does not match database
                           console.log("terrible horrible or just mistake");
                           return res.status(401).send({ auth: false, token: null });
                       }
                       else {
                           //good good, gotta check the redirect stuff
                           console.log("yay, good password!!!1");
                           token = jwt.sign({
                               "exp": Math.floor(Date.now() / 1000) + (2 * 60 * 60),
                               "usr": user
                           }, config.secret);
                       }
                       res.cookie('jwt', token);
                       console.log(token);
                       if (redirect) {
                           return res.redirect(redirect);
                       }
                       else {
                           res.status(200).send({ auth: true, token: token });
                       }
                   })
               }
               client.close();
           });
       });
       console.log("terrible terrible" + hashword);

       //res.render('login', {});
   }
});

//testy testy test test test testststststs
router.get('/api/:username', verifyToken, function(req, res, next) {
    console.log("in the test");
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server in test.js");
        let db = client.db(dbName);
        let query = {'username': req.params.username};
        db.collection("Users").find(query, {projection: {_id: 0, password: 0}}).toArray(function (err, result) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (result.length < 1) return res.status(404).send("No user found.");
            let renderObj = new Object();
            renderObj.user = req.params.username;
            renderObj.posts = new Array();
            db.collection("Posts").find(query).toArray(function (error, resultt) {
                if (error) return res.status(500).send("not sure what this means");
                if (resultt) {
                    renderObj.posts = resultt;
                }
                res.status(200).render('api', renderObj);
                //res.render('blog', renderObj);
                client.close();
            });
        });
    });
});

router.get('/api/:username/:postid', verifyToken, function (req, res, next) {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server in test.js");
        let db = client.db(dbName);
        let query = {'username': req.params.username, 'postid': parseInt(req.params.postid)};
        db.collection("Posts").find(query, {projection: {_id: 0, password: 0}}).toArray(function (err, result) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (result.length < 1) return res.status(404).send("No post found.");
            let renderObj = new Object();
            renderObj.user = req.params.username;
            renderObj.posts = result;
            console.log(renderObj);
            res.status(200).render('api',renderObj);
            client.close();
        });
    });
});

router.delete('/api/:username/:postid', verifyToken, function(req, res, next) {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        let db = client.db(dbName);
        console.log("info i want");
        console.log(req.params.username);
        console.log(req.params.postid);
        let postid = parseInt(req.params.postid); //technically this will allow things like 34xxyy... fix this
        let query = {'username': req.params.username, 'postid': postid};
        db.collection("Posts").deleteOne(query, function (err, obj) {
            if (err) return res.status(400).send("bad bad bad it aint there (?)"); //might be wrong error
            if (obj.result.n == 0) {
                return res.status(400).send("pretty sure this means the post wasnt there");
            }
            console.log("guuuud delete");
            res.status(204).send("hmmmmmmm i think it deleted");
            console.log(obj.result);
            client.close();
        });
    });
});

router.post('/api/:username/:postid', verifyToken, function(req, res, next) {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        let db = client.db(dbName);
        let postid = parseInt(req.params.postid); //technically this will allow things like 34xxyy... fix this
        let query = {'username': req.params.username, 'postid': postid};
        db.collection("Posts").find(query).toArray(function (err, result) {
            console.log(result);
            if (err) return res.status(400).send("idk what this issue is");
            if (result.length != 0) {
                return res.status(400).send("already exists")
            }
            else {
                if (!req.body.title || !req.body.body) {
                    return res.status(400).send("bro why no title/body");
                }
                query.title = req.body.title;
                query.body = req.body.body;
                console.log(req.body);
                db.collection("Posts").insertOne(query, function (err, obj) {
                   if (err) return res.status(400).send("not sure if correct error");
                   res.status(201).send("created gooooooood thing");
                });
            }
            client.close();
        });
    });
});

router.put('/api/:username/:postid', verifyToken, function (req, res, next) {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        let db = client.db(dbName);
        let postid = parseInt(req.params.postid); //technically this will allow things like 34xxyy... fix this
        let query = {'username': req.params.username, 'postid': postid};
        db.collection("Posts").find(query).toArray(function (err, result) {
            console.log(result);
            if (err) return res.status(400).send("error???");
            if (result.length == 0) {
                return res.status(400).send("ain't there yet horrible")
            }
            else {
                if (!req.body.title || !req.body.body) {
                    return res.status(400).send("bro why no title/body");
                }
                //query.title = req.body.title;
                update = {$set: {'title': req.body.title, 'body': req.body.body}};
                console.log(req.body);
                db.collection("Posts").updateOne(query, update, function (err, obj) {
                    if (err) return res.status(400).send("not sure if correct error");
                    res.status(200).send("updated suchhhh a gooooooood thing");
                });
            }
            client.close();
        });
    });
});

module.exports = router;