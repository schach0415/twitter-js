'use strict';

const express = require('express');
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(express.static(__dirname + '/public'))

app.use('/', routes);

// app.use((req, res, next) => {
//     res.sendFile(__dirname + '/public' + req.url)
// })


app.listen(3000, () => {
    console.log('server listening')
})