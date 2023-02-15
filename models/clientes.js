const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pedido = require("./pedidos.js");
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

const clienteSchema = mongoose.Schema({
    nombre_usuario: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    codigo_postal: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ["hombre", "mujer"],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pedidos: [{
        type: Schema.Types.ObjectId,
        ref: 'pedido'
    }]
})

clienteSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        console.log('Password introducida: ' + candidatePassword);
        console.log('Password verdadera: ' + this.password)
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

clienteSchema.pre('save', function (next) {
    var user = this;
    // solo aplica una función hash al password si ha sido modificado (o es nuevo)
    if (!user.isModified('password')) return next();
    // genera la salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        // aplica una función hash al password usando la nueva salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // sobrescribe el password escrito con el “hasheado”
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model("cliente", clienteSchema)