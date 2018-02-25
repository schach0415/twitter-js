'use strict';

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets });
})

router.get('/users/:name', (req, res, next) => {
    const name = req.params.name;
    const list = tweetBank.find({ name: name })
    res.render('index', { list: list })
})

router.get('/tweets/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweetBank.find({ id: +id })
    res.render('index', { tweet: tweet })
})

// router.post('/users/:id', (req, res, next) => {
//     const id = req.params.id
//     const newUser = tweetBank.add(req.body)
//     res.render('index', { newUser: newUser })
// })

module.exports = router;