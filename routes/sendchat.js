const express = require('express');
//const messageroutes = require('./routes/message');
const fs = require('fs');
const router = express.Router();

router.post('/chat', (req, res) => {
    const userName = req.body.userName;
    const chat = req.body.chat;

    const message = `${userName}: ${chat}\n`;

    fs.appendFile('chat.txt', message, 'utf8', (err) => {
        if (err) {
            res.send('An error occurred while sending the message.');
            return;
        }

        res.redirect('/message');
    });
});

module.exports = router;
