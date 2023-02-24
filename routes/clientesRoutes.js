const express = require("express");
const clienteSchema = require("../models/clientes.js");
const router = express.Router();
const {
    body,
    validationResult
} = require('express-validator')

// POST de un nuevo usuario
router.post('/', [
    body('nombre_usuario', 'Ingrese un nombre de usuario que tenga entre 5 y 15 caracteres')
    .exists()
    .isLength({
        min: 5,
        max: 15
    }),
    body('nombre', 'Ingrese un nombre correcto')
    .exists()
    .isLength({
        min: 1,
        max: 30
    }),
    body('email', 'Ingrese un email valido')
    .exists()
    .isEmail(),
    body('direccion', 'Ingrese una direccion valida')
    .exists()
    .isLength({
        min: 1,
        max: 60
    }),
    body('ciudad', 'Ingrese una ciudad valida')
    .exists()
    .isLength({
        min: 1,
        max: 30
    }),
    body('pais', 'Ingrese un pais valido')
    .exists()
    .isLength({
        min: 1,
        max: 20
    }),
    body('codigo_postal', 'Ingrese un codigo postal valido')
    .exists()
    .isLength({
        min: 5,
        max: 5
    })
    .isNumeric(),
    body('telefono', 'Ingrese un telefono valido')
    .exists()
    .isLength({
        min: 9,
        max: 9
    })
    .isNumeric(),
    body('password', 'Ingrese una password valida, tiene que tener minimo 8 caracteres y maximo 20')
    .exists()
    .isLength({
        min: 8,
        max: 20
    })
], function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array()
        })
        console.log(errors)
    } else {
        clienteSchema.create(req.body, function (err, userinfo) {
            if (err) res.status(500).send(err);
            else res.sendStatus(200);
        });
    }
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