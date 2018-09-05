const express = require('express');
const path = require('path');

const router = express.Router();

const findMatch = body => {
    console.log(body);
};

router.get('/api/image', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/image.jpg"));
});

router.post('/api/survey', (req, res) => {
    findMatch(req.body);
    res.status(200).end();
});

module.exports = router;