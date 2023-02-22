const express = require("express");
const clienteSchema = require("../models/clientes.js");
const router = express.Router();

// POST de un nuevo usuario
router.post('/', function (req, res, next) {
    clienteSchema.create(req.body, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// PUT de un usuario existente identificado por su Id
router.put('/:id', function (req, res, next) {
    clienteSchema.findByIdAndUpdate(req.params.id, req.body, function (err,
        userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// DELETE de un usuario existente identificado por su Id
router.delete('/:id', function (req, res, next) {
    clienteSchema.findByIdAndDelete(req.params.id, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// get all clientes
router.get("/", (req, res) => {
    clienteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

// GET de un usuario específico
router.get("/:id", (req, res) => {
    clienteSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

router.get("/nombre_usuario", (req, res) => {
    clienteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

module.exports = router