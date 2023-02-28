var express = require('express');
const pedidosSchema = require("../models/pedidos");
var router = express.Router();
const {
    body,
    validationResult
} = require('express-validator')

/* GET de la pagina de insertar pedidos */
router.get('/', function (req, res, next) {
    res.render('insertPedido');
});

router.post('/', [
    body('cliente', 'Ingrese un id válido')
    .exists()
    .isLength({
        min: 15,
        max: 30
    }),
    body('direccion', 'Ingrese una direccion valida')
    .exists()
    .isLength({
        min: 3,
        max: 50
    }),
    body('metodo_pago', 'Elija una de las tres opciones')
    .exists()
], function (req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('insertPedido', {
            validaciones: validaciones,
            valores: valores
        })
    } else {
        pedidosSchema.create(req.body, function (err, userinfo) {
            if (err) {
                res.redirect('insertPedido');
                console.log(err)
            } else {
                res.redirect('main');
            }
        });
    }

});



module.exports = router;