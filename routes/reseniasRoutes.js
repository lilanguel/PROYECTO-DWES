const express = require("express");
const reseniaSchema = require("../models/resenias.js");
const router = express.Router();

/// POST de una nueva reseña
router.post('/', function (req, res, next) {
    reseniaSchema.create(req.body, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
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
router.get("/resenias", (req, res) => {
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