'use strict';

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
})

router.get('/users/:name', (req, res, next) => {
    const name = req.params.name;
    const tweets = tweetBank.find({ name: name })
    res.render('index', { tweets: tweets, showForm: false })
})

router.get('/tweets/:id', (req, res, next) => {
    const id = req.params.id
    const tweets = tweetBank.find({ id: +id })
    res.render('index', { tweets: tweets })
})

router.post('/tweets', (req, res, next) => {
    const name = req.body.name
    const text = req.body.text
    tweetBank.add(name, text)
    res.redirect('/')
})

module.exports = router;