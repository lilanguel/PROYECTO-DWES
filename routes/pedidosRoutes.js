const express = require("express");
const pedidoSchema = require("../models/pedidos.js");
const router = express.Router();

// create pedido

router.post("/pedidos", (req, res) => {
    const pedido = pedidoSchema(req.body);
    pedido.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
});

// get all users
router.get("/pedidos", (req, res) => {
    pedidoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router