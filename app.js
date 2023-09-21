const express = require('express');
const bodyParser = require('body-parser');
const loginroutes = require('./routes/Login');
const messageroutes = require('./routes/message');
const sendchatroutes = require('./routes/sendchat');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginroutes);
app.use(messageroutes);
app.use(sendchatroutes);

app.listen(3000, () => {
    console.log('Server is running on port 6000');
});
