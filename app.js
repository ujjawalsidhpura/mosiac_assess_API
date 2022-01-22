// SetUp
require('dotenv').config;
const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || '3000';
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const createError = require('http-errors');

// Initialize
const app = express();
const server = http.createServer(app);

// Middleware Setup
app.set('port', port);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Base Routes 
// Host all future base routes below here 
const api = require('./routes/api');
app.use('/api', api);

// Error Handling
// 404 Error
app.use(function (req, res, next) {
    next(createError(404));
});

// 500 Error
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send('Error')
});

//Initiate Server
server.listen(port, () => console.log('App listening at ' + port));

module.exports = app;