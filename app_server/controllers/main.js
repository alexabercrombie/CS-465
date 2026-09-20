/* Get Homepage */
var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* const index = (req, res) => {
    res.render('index', {title: "Travlr Getaways"});
}; */

router.get('/', ctrlMain.index); 

module.exports = {
    index
}