const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articulos = require("./articulos.js");
const clientes = require("./clientes.js");


const pedidoSchema = mongoose.Schema({

    fecha:{
        type: Date,
        required: true
    },
    metodo_pago:{
        type: String,
        required: true
    },
    clientes: {
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    confirmacion:{
        type: Boolean,
        required:true
    },articulos: [{
        type: Schema.Types.ObjectId,
        ref: 'articulos'
    }]



})

module.exports = mongoose.model("pedido", pedidoSchema)

