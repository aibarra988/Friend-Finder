const express = require('express');
const path = require('path');

const router = express.Router();

let friends = require('../data/friends.js');

router.get('/api/image', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/image.jpg"));
});

router.post('/api/survey', (req, res) => {
    // Create newFriend object
    var newFriend = req.body;

    // Create array that holds 'index' and 'diff from newFriend'
    var scoreDiffs = [];
    for (var j = 0; j < friends.length; j++) {
        var diff = 0;
        for (var k = 0; k < friends[j].answers.length; k++) {
            diff += Math.abs(friends[j].answers[k] - newFriend.answers[k]);
        };
        scoreDiffs.push(diff);
    };

    var matchIndex = scoreDiffs.indexOf(Math.min(...scoreDiffs));
    var match = friends[matchIndex];

    // Add new friend to array
    friends.push(newFriend);

    // Send back the match
    return res.json(match);
});

router.get('/api/friends', (req, res) => {
    res.json(friends);
});

module.exports = router;