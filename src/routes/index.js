// EXPRESS
const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts')

// SET INDEX ROUTER
router.get('/', function (req, res, next) {
        res.render('pages/home')
});

// SET FORM ROUTER
router.get('/form', function (req, res, next) {
        res.render('pages/form')
});

// SET DASHBOARD ROUTER
router.get('/dashboard', function (req, res, next) {
        res.render('pages/dashboard')
});




module.exports = router;