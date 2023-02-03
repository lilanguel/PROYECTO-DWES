const express = require("express");
const articuloSchema = require("../models/articulos.js");
const router = express.Router();

// create articulo

router.post("/articulos", (req, res) => {
    const articulo = articuloSchema(req.body);
    articulo.save().then((data) => res.json(data)).catch((error) => res.json({
        message: error
    }));
});

// get all articulos
router.get("/articulos", (req, res) => {
    articuloSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router