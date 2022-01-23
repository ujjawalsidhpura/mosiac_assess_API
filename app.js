// SetUp
require('dotenv').config;
const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || '3000';
const bodyParser = require("body-parser");
const createError = require('http-errors');
const flatCache = require('flat-cache');


// Initialize
const app = express();
const server = http.createServer(app);


// Middleware Setup
app.set('port', port);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Caching 
// Load New Cache
const cache = flatCache.load('postCache', path.resolve('./cache'));

// Create Flat-cache routes
const flatCacheMiddleware = (req, res, next) => {

    const key = '__express__' + req.originalUrl || req.url
    const cacheContent = cache.getKey(key);

    if (cacheContent) {

        res.send(cacheContent);
    } else {

        res.sendResponse = res.send;
        res.send = (body) => {
            cache.setKey(key, body);
            cache.save();
            res.sendResponse(body);
        }
        next();
    }
};


// Base Routes 
// Host all future base routes below here 
const apiRouter = require('./routes/api');
app.use('/api', flatCacheMiddleware, apiRouter);


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


// Initiate Server
server.listen(port, () => console.log('App listening at ' + port));

module.exports = app;