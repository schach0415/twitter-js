'use strict';

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function makeRouterWithSockets (io) {

router.get('/', (req, res, next) => {
    let allTheTweets = tweetBank.list();
    res.render('index', {
        title: 'Twitter.js',
        tweets: allTheTweets,
        showForm: true
    });
})

router.get('/users/:username', (req, res, next) => {
    const username = req.params.username;
    const tweetsForName = tweetBank.find({ name: username })
    res.render('index', {
        title: 'Twitter.js',
        tweets: tweetsForName,
        showForm: true,
        username: username
    })
})

router.get('/tweets/:id', (req, res, next) => {
    const id = req.params.id
    const tweetsWithThatId = tweetBank.find({ id: +id })
    res.render('index', {
        title: 'Twitter.js',
        tweets: tweetsWithThatId,
    })
})

router.post('/tweets', (req, res, next) => {
    const name = req.body.name
    const text = req.body.text
    tweetBank.add(name, text)
    res.redirect('/')
})
 
return router;
}