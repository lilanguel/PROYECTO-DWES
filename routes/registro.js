var express = require('express');
const clienteSchema = require("../models/clientes.js");
var router = express.Router();

/* GET register page. */
router.get('/', function (req, res, next) {
    res.render('registro');
});

// POST de un nuevo usuario
router.post('/', function (req, res, next) {
    clienteSchema.create(req.body, function (err, userinfo) {
        if (err) {
            res.redirect('registro');
        } else {
            res.redirect('main');
        }
    });
});

module.exports = router;