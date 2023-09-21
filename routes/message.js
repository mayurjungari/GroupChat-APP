const express = require('express');

const fs = require('fs');
const router = express.Router();

router.use('/message', (req, res) => {
    const userName = req.body.userName;

    if (userName === '') {
        res.send('Invalid username.');
        return;
    }

    fs.readFile('chat.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.send('An error occurred while reading the file.');
            return;
        }

        res.send(`
            <h1>Group Chat:</h1><br>${data}
            <form action='/chat' method='post'>
                <input type="text" name="userName" value="${userName}" style="display:none;">
                <input type="text" name="chat">
                <button type="submit">Send</button>
            </form>
        `);
    });
});

module.exports = router;
