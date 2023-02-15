const express = require("express");
const articuloSchema = require("../models/articulos.js");
const router = express.Router();

/// POST de un nuevo articulo
router.post('/', function (req, res, next) {
    articuloSchema.create(req.body, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// PUT de un artiulo existente identificado por su Id
router.put('/:id', function (req, res, next) {
    articuloSchema.findByIdAndUpdate(req.params.id, req.body, function (err,
        userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// DELETE de un articulo existente identificado por su Id
router.delete('/:id', function (req, res, next) {
    articuloSchema.findByIdAndDelete(req.params.id, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// get all articulos
router.get("/", (req, res) => {
    articuloSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

// GET de un articulo específico
router.get("/:id", (req, res) => {
    articuloSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router