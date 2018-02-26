'use strict';

const express = require('express');
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const path = require('path');

const router = require('./routes');

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(volleyball)

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// start the server
var server = app.listen(1337, function(){
    console.log('listening on port 1337');
});
var io = socketio.listen(server);

// the typical way to use express static middleware
app.use(express.static(path.join(__dirname, '/public')));

// modular routing that uses io inside it
app.use('/', router(io));

  
// app.use((req, res, next) => {
//     res.sendFile(__dirname + '/public' + req.url)
// })