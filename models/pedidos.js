const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articulos = require("./articulos.js");
const cliente = require("./clientes.js");


const pedidoSchema = mongoose.Schema({

    fecha:{
        type: Date,
        default: Date.now
    },
    metodo_pago:{
        type: String,
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    confirmacion:{
        type: Boolean,
        default: false
        
    },
    direccion:{
        type: String,

    },
    articulos: [{
        type: Schema.Types.ObjectId,
        ref: 'articulos'
    }]

})

module.exports = mongoose.model("pedido", pedidoSchema)

