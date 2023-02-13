var express = require('express');
const clienteSchema = require("../models/clientes.js");
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login');
});

module.exports = router;