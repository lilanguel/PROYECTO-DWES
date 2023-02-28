const express = require("express");
const reseniaSchema = require("../models/resenias.js");
const router = express.Router();
const {
    body,
    validationResult
} = require('express-validator')

/// POST de una nueva reseña
router.post('/',[
    body('comentario', 'Ingrese un comentario (Maximo 90 caracteres)').exists().isLength({
        min: 1,
        max: 90
    }),
    body('Valoracion', 'Valoracion de maximo 10 caracteres').exists().isLength({
        min: 1,
        max: 10
    })
] ,function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array()
        })
        console.log(errors)
    } else {
        reseniaSchema.create(req.body, function (err, userinfo) {
            if (err) res.status(500).send(err);
            else res.sendStatus(200);
        });
    }
});

// PUT de una reseña existente identificado por su Id
router.put('/:id', function (req, res, next) {
    reseniaSchema.findByIdAndUpdate(req.params.id, req.body, function (err,
        userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// DELETE de una reseña existente identificado por su Id
router.delete('/:id', function (req, res, next) {
    reseniaSchema.findByIdAndDelete(req.params.id, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// get all reseñas
router.get("/", (req, res) => {
    reseniaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

// GET de reseña dependiendo de su ID
router.get("/:id", (req, res) => {
    reseniaSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router