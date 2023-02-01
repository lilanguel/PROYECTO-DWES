var express = require('express');
require('dotenv').config();
var app = express();
var mongoose = require('mongoose');
var pedidos = require('./routes/pedidosRoutes')
var articulos = require('./routes/articulosRoutes')
var clientes = require('./routes/clientesRoutes')
var resenias = require('./routes/reseniasRoutes')

// Conexión //

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// MiddleWares

// Rutas

app.get("/pedidos", pedidos);
app.get("/articulos", articulos);
app.get("/clientes", clientes);
app.get("/resenas", resenias);

// Server Listenning //

app.listen(9000, () =>
  console.log("Servidor escuchando en el puerto 9000")
)