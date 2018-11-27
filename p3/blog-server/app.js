var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
//var loginRouter = require('./routes/login');
//var testRouter = require('./routes/t');

//don't know if this connection is necessary
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//connection url
const url = 'mongodb://localhost:27017';
//database name
const dbName = 'BlogServer';
//connect method to connect to the server
MongoClient.connect(url, function (err, client) {
	assert.equal(null, err);
	console.log("Connected to server");
	const db = client.db(dbName);
	client.close();
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter);
//app.use('/login', loginRouter);
//app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/editor', function(req, res, next) {
  var token = req.cookies.jwt;
    if (!token) {
        console.log("no token rip");
        return res.redirect('http://localhost:3000/login?redirect=/editor');
    }
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.redirect('http://localhost:3000/login?redirect=/editor');// if everything good, save to request for use in other routes
        //req.userId = decoded.id;
        next();
    });
});

module.exports = app;
