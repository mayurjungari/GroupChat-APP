const express = require('express');
const router = express.Router();

router.get('/Login', (req, res) => {
    res.send(`
        <form action="/message" method="post" >
            User Name: <input type="text" name="userName">
            <button type="submit">Log In</button>
        </form>
    `);
});

module.exports = router;
