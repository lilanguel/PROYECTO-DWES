const express = require("express");
const reseniaSchema = require("../models/resenias.js");
const router = express.Router();

/// POST de una nueva reseña
router.post('/', function (req, res, next) {
    reseniaSchema.create(req.body, function (err, reseniainfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// PUT de una resea existente identificado por su Id
router.put('/:id', function (req, res, next) {
    reseniaSchema.findByIdAndUpdate(req.params.id, req.body, function (err,
        reseniainfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// DELETE de una reseña existente identificado por su Id
router.delete('/:id', function (req, res, next) {
    reseniaSchema.findByIdAndDelete(req.params.id, function (err, reseniainfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// get all resenias
router.get("/resenias", (req, res) => {
    reseniaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router