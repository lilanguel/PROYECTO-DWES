const mongoose = require('mongoose')

const articuloSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Float,
        required: true
    },
    tallas: {
        type: String,
        enum: ["S", "M", "L", "XL"],
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ["accesorio", "calzado", "ropa"],
        required: true
    },
    resenas: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("articulo", articuloSchema)