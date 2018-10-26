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

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.password);
    //checking to make sure that a username and password were entered
    //unsure if this is correct
   if (!req.body.username || !req.body.password) {
       next(createError(400));
       //res.render('login', {});
   }
   else {
       // in progress: bcrypt.hash(req.body.password)
       res.render('login', {});
   }
});

module.exports = router;