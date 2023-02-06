const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clientes = require("./clientes")

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
        type: Schema.ObjectId,
        ref:"clientes",
        required:true
    }


})

module.exports = mongoose.model("resenia", reseniaSchema)

