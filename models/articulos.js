const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const resenia = require("./resenias.js");

const articuloSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    tallas: {
        type: String,
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
    resenias: [{
        type: Schema.Types.ObjectId,
        ref: 'resenia'
    }]
})

module.exports = mongoose.model("articulos", articuloSchema)
