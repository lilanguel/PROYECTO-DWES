const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({

    fecha:{
        type: String,
        required: true
    },
    metodo_pago:{
        type: String,
        required: true
    },
    confirmacion:{
        type: Boolean,
        required:true
    }


})

module.exports = mongoose.model("pedido", pedidoSchema)

