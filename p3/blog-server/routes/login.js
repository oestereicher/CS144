var createError = require('http-errors');
let express = require('express');
let router = express.Router();
let app = express();
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:27017';
let dbName = 'BlogServer';

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.set('view engine', 'ejs');
app.set('views', '.');

router.get('/', (req, res) => {
    res.render('login', {});
});


//note: i think there's an issue bc the mongodb stuff is nonblocking
//and somehow we gotta write a callback function so that stuff doesn't
//happen in the wrong order
//https://stackoverflow.com/questions/12030248/what-is-the-right-way-to-make-a-synchronous-mongodb-query-in-node-js
router.post('/', (req, res, next) => {
    let user = req.body.username;
    let pass = req.body.password;
    //checking to make sure that a username and password were entered
    //unsure if this is correct
   if (!user || !pass) {
       next(createError(400));
       //res.render('login', {});
   }
   else {
       let hashword = new Array();
       MongoClient.connect(url, function(err, client) {
           assert.equal(null, err);
           console.log("Connected correctly to server in blog.js");
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
                   bcrypt.compare(pass, hashword[0].password, function (err, res) {
                       assert.equal(null, err);
                       if (!res) { //password does not match database
                           console.log("terrible horrible or just mistake");
                           next(createError(401));
                       }
                       else {
                           //good good, gotta check the redirect stuff
                           console.log("yay, good password!!!1");
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

module.exports = router;