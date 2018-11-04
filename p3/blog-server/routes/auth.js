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
    res.render('login', {});
});


//note: i think there's an issue bc the mongodb stuff is nonblocking
//and somehow we gotta write a callback function so that stuff doesn't
//happen in the wrong order
//https://stackoverflow.com/questions/12030248/what-is-the-right-way-to-make-a-synchronous-mongodb-query-in-node-js
router.post('/login', (req, res, next) => {
    let user = req.body.username;
    let pass = req.body.password;
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
                       res.status(200).send({ auth: true, token: token });
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
            if (!result) return res.status(404).send("No user found.");
            res.status(200).send(result);
            //res.render('blog', renderObj);
            client.close();
        });
    });
});

module.exports = router;