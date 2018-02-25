'use strict';

const express = require('express');
const app = express(); // creates an instance of an express application
const chalk = require('chalk');


app.use((req, res, next) => {
    console.log(chalk.magenta(`${req.method} ${req.url} ${res.statusCode}`))
    next()
})


app.get('/', (req, res, next) => {
    res.send('hello')
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