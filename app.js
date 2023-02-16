var express = require('express');
require('dotenv').config();
var app = express();
var path = require('path');
var logger = require('morgan');
console.log("https://www.youtube.com/watch?v=CEnIXb47eF0&t=31s")
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var pedidos = require('./routes/pedidosRoutes');
var articulos = require('./routes/articulosRoutes');
var clientes = require('./routes/clientesRoutes');
var resenias = require('./routes/reseniasRoutes');
var indexRouter = require('./routes/index');
var registerRouter = require("./routes/registro");
var loginRouter = require("./routes/login");
var editUserRouter = require("./routes/editUser");
var mainRouter = require("./routes/main");

// Conexión //

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// MiddleWares

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use("/registro", registerRouter);
app.use('/login', loginRouter);
app.use('/editUser', editUserRouter);
app.use('/clientes', clientes);
app.use('/pedidos', pedidos);
app.use('/articulos', articulos);
app.use('/resenas', resenias);


// Server Listenning //

app.listen(process.env.PORT, () =>
  console.log("Servidor escuchando en el puerto 9000")
)