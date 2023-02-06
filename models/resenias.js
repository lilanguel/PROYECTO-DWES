const mongoose = require('mongoose');
const cliente = require("./clientes.js");
const Schema = mongoose.Schema;

const reseniaSchema = mongoose.Schema({

    comentario:{
        type: String,
        required: true
    },
    valoracion:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required:true
    },
    pedido_verificado:{
        type: Boolean,
        required:true
    },
    ID_Cliente:{
        type: Schema.Types.ObjectId,
        ref:"cliente",
        required:true
    }
})

module.exports = mongoose.model("resenia", reseniaSchema)

