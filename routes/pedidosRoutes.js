const express = require("express");
const pedidoSchema = require("../models/pedidos.js");
const articulos = require("../models/articulos");
const router = express.Router();

// POST de un nuevo pedido
router.post('/', function (req, res, next) {
    pedidoSchema.create(req.body, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// PUT de un pedido existente identificado por su Id
router.put('/:id', function (req, res, next) {
    pedidoSchema.findByIdAndUpdate(req.params.id, req.body, function (err,
        userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// DELETE de un pedido existente identificado por su Id
router.delete('/:id', function (req, res, next) {
    pedidoSchema.findByIdAndDelete(req.params.id, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// GET all de pedidos
router.get("/", (req, res) => {
    pedidoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

// GET de un pedido específico
router.get("/:id", (req, res) => {
    pedidoSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

// GET de un pedido en específico además de traer solo el id y sus artículos

router.get("/info/:id", (req, res) => {
    pedidoSchema.findById(req.params.id).populate({ path: 'articulos'})
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router