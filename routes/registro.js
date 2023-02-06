var express = require('express');
var router = express.Router();
var cliente = require("../models/clientes")

/* GET register page. */
router.get('/', function (req, res, next) {
    res.render('registro');
});

// POST de un nuevo usuario
router.post('/', function (req, res, next) {
    cliente.create(req.body, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

module.exports = router;