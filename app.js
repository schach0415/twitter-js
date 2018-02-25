'use strict';

const express = require('express');
const app = express(); // creates an instance of an express application



app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('server listening')
})