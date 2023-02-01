const mongoose = require('mongoose')

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
    pedidos: {
        type:Array,
        required: true
    }
})

module.exports = mongoose.model("cliente", clienteSchema)