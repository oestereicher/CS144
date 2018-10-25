let express = require('express');
let router = express.Router();
let app = express();
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:27017';
let dbName = 'BlogServer';

app.set('view engine', 'ejs');
app.set('views', '.');

router.get('/login', (req, res) => {

});