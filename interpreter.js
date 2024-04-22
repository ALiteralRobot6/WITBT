export var express = require('express');
export var app = express();

import {express, app} from './interpreter.js';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    // Handle the get for this route
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000');
});