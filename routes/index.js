'use strict';

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets });
})


module.exports = router;