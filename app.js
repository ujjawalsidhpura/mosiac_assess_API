// SetUp
require('dotenv').config;
const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || '3000';
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const logger = require('morgan');

// Initialize
const app = express();
const server = http.createServer(app);

// Middleware Setup
app.set('port', port);
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Error Handling

// 404 
app.use(function (next) {
    next(createError(404));
});

// 500
app.use(function (err, res) {
    res.locals.message = err.message;
    res.status(err.status || 500).send('Error');
});

//Initiate Server
server.listen(port, () => console.log('App listening at ' + port));

module.exports = app;