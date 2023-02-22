var express = require('express');
const clienteSchema = require("../models/clientes.js");
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login');
});

// Comprueba si el usuario existe
router.post('/', function (req, res, next) {
    clienteSchema.findOne({
        nombre_usuario: req.body.nombre_usuario
    }, function (err, user) {
        if (err) res.status(500).send('¡Error comprobando el usuario!');
        // Si el usuario existe...
        if (user != null) {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (err) return next(err);
                // Si el password es correcto...
                if (isMatch) {
                    console.log('password correcta')
                    res.redirect(`main`);
                } else {
                    console.log('password incorrecta')
                    res.redirect('login');
                }
            });
        } else res.status(401).send({
            message: 'usuario no registrado'
        });
    });
});

module.exports = router;