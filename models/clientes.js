const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pedido = require("./pedidos.js");
var bcrypt = require('bcryptjs');

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

clienteSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model("cliente", clienteSchema)