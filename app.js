var express = require('express');
require('dotenv').config();
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var pedidos = require('./routes/pedidosRoutes')
var articulos = require('./routes/articulosRoutes')
var clientes = require('./routes/clientesRoutes')
var resenias = require('./routes/reseniasRoutes')
var indexRouter = require('./routes/index');


// Conexión //

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// MiddleWares

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// Rutas

app.get("/pedidos", pedidos);
app.get("/articulos", articulos);
app.get("/clientes", clientes);
app.get("/resenas", resenias);


// Server Listenning //

app.listen(9000, () =>
  console.log("Servidor escuchando en el puerto 9000")
)