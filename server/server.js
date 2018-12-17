require('dotenv').config();
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const {
    CONNECTION_STRING,
    REACT_APP_SERVER_PORT,
    SESSION_SECRET
} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized:false
}))




//^/end points/^//


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});
app.listen(REACT_APP_SERVER_PORT, () => {
    console.log(`listening on port: ${REACT_APP_SERVER_PORT}`)
});
