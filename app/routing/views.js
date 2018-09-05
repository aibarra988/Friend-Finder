const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.header({ 'Content-Type': 'text/html'});
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/survey', (req, res) => {
res.header({ 'Content-Type': 'text/html'});
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;