'use strict';

const express = require('express');
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates



const locals = { 
    title: 'An Example',
    people : [ 
        { name: 'Gandalf'},
        { name: 'Frodo'},
        { name: 'Hermione'},
    ]
};


// nunjucks.render('index.html', locals, (err, output) => {
//     console.log(output)
// })

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use((req, res, next) => {
    console.log(chalk.magenta(`${req.method} ${req.url} ${res.statusCode}`))
    // res.redirect(__dirname + './views/index.html')
    next()
})


app.get('/', (req, res, next) => {
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.use('/special/*', (req, res, next) => {
    res.send('you reached the special area')
})


app.get('/is-anybody-in-there', (req, res, next) => {
    res.send('I`m here')
})

app.post('/modernism', (req, res, next) => {
    res.send('really')
})
app.listen(3000, () => {
    console.log('server listening')
})