var express = require('express');
const clienteSchema = require("../models/clientes.js");
var router = express.Router();
const {
    body,
    validationResult
} = require('express-validator')

/* GET register page. */
router.get('/', function (req, res, next) {
    res.render('registro');
});

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
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('registro', {
            validaciones: validaciones,
            valores: valores
        })
    } else {
        clienteSchema.create(req.body, function (err, userinfo) {
            if (err) {
                res.redirect('registro');
            } else {
                res.redirect('main');
            }
        });
    }

});

module.exports = router;