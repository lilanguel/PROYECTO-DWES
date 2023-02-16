const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articulos = require("./articulos.js");
const cliente = require("./clientes.js");


const pedidoSchema = mongoose.Schema({

    fecha:{
        type: Date,
        required: true
    },
    metodo_pago:{
        type: String,
        required: true
    },
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    confirmacion:{
        type: Boolean,
        required:true
    },articulos: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'articulos'
    }]

})

module.exports = mongoose.model("pedido", pedidoSchema)

