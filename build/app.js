"use strict";

var express = require("express");
//const createRoles= require("./services/initialSetup")
var expressSession = require("express-session");
var path = require("path");
var methodOverride = require('method-override');
var cookieParser = require("cookie-parser");
var authenticationMiddleware = require('./services/authentication');
var morgan = require("morgan");
var app = express();
var cors = require("cors");
var corsOptions = {
  origin: "*"
};
var allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
  res.header('Access-Control-Allow-Headers', "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
};
var bodyParser = require('body-parser');

//app.use(createRoles());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(expressSession({
  secret: "SECRET"
}));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(morgan("dev"));
app.use(authenticationMiddleware);
app.use(function (req, res, next) {
  app.locals.user = req.session.user;
  next();
});
var mainRoutes = require("./routes/main");
var adminRoutes = require("./routes/admin");
var productRoutes = require("./routes/producto");
var userRoutes = require("./routes/user");
var apiProductsRouter = require('./routes/api/productsRouter');
var apiUsersRouter = require('./routes/api/usersRouter');
app.use(express["static"](path.resolve(__dirname, "./public")));
console.log(path.resolve(__dirname, "./public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);
app.use(function (req, res, next) {
  res.send("Error 404! File Not Found");
  next;
});

// Server Init
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('Server escuchando en puerto http://localhost:3000');
});