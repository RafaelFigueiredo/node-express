// EXPRESS
const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts')

// SET INDEX ROUTER
router.get('/', function (req, res, next) {
        res.render('pages/home')
});

module.exports = router;