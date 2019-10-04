// EXPRESS
const express = require('express');
const router = express.Router();


// SET INDEX ROUTER
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

module.exports = router;