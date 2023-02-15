const express = require("express");
const clienteSchema = require("../models/clientes.js");
const router = express.Router();

/* GET edit user page. */
router.get('/', function (req, res, next) {
    res.render('editUser');
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

// GET de un usuario específico
router.get("/:id", (req, res) => {
    clienteSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});

module.exports = router;