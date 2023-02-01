const express = require("express");
const clienteSchema = require("../models/clientes.js");
const router = express.Router();

// create cliente

router.post("/clientes", (req, res) => {
    const cliente = clienteSchema(req.body);
    cliente.save().then((data) => res.json(data)).catch((error) => res.json({
        message: error
    }));
});

// get all clientes
router.get("/clientes", (req, res) => {
    clienteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router