const express = require("express");
const articuloSchema = require("../models/articulos.js");
const router = express.Router();

// create pedido

router.post("/articulos", (req, res) => {
    const articulo = articuloSchema(req.body);
    articulo.save().then((data) => res.json(data)).catch((error) => res.json({
        message: error
    }));
});

// get all users
router.get("/articulos", (req, res) => {
    articuloSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router