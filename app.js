var express = require('express');
require('dotenv').config();
var app = express();
var mongoose = require('mongoose');
var pedidos = require('./routes/pedidosRoutes')


// Conexión //

mongoose.connect('mongodb+srv://Mario:1234@shamedb.d9vcgir.mongodb.net/shameDb?retryWrites=true&w=majority').then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

// MiddleWares

// Rutas

app.get("/pedidos", pedidos );


// Server Listenning //

app.listen(9000,()=>
  console.log("Servidor escuchando en el puerto 9000")
)
