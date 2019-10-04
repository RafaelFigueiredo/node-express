// EXPRESS
const express = require('express');
const app = express();
const router = express.Router();


// CALL ROUTERS FUNCTION 
const index = require('./routes/index');
const fraudRoute = require('./routes/fraudRoute');
app.use('/', index);
app.use('/fraud', fraudRoute);
module.exports = app;