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


//Initiate Server
server.listen(port, () => console.log('App listening at ' + port));