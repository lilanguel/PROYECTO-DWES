const express = require("express");
const pedidoSchema = require("../models/pedidos.js");
const articulos = require("../models/articulos");
const cliente = require("../models/clientes");
const router = express.Router();

// POST de un nuevo pedido, la id pasada como parámetro es el id del cliente ya que no tiene sentido que haya un pedido sin cliente
router.post('/:id', function (req, res, next) {
    req.body.cliente = req.params.id
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
        if (err || req.body.confirmacion === false ) res.status(500).send(err);
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

// GET de un pedido en específico con la información de sus articulos refrenciados

router.get("/info/:id", (req, res) => {
    pedidoSchema.findById(req.params.id).populate({ path: 'articulos'})
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

// PUT de un pedido cambiandole solamente el parámetro confirmación a true 
router.put('/confirmacion/:id', function (req, res, next) {
    pedidoSchema.findByIdAndUpdate(req.params.id, {confirmacion: true} , function (err,
        userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// GET de un pedido en específico con la información del cliente que hizo el pedido

router.get("/cliente/:id", (req, res) => {
    pedidoSchema.findById(req.params.id).populate({ path: 'cliente'})
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router