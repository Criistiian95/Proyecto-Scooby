const express = require("express");
//const createRoles= require("./services/initialSetup")
const expressSession= require("express-session")
const path = require("path");
const methodOverride =  require('method-override');
const cookieParser = require("cookie-parser");
const authenticationMiddleware = require('./services/authentication');
const morgan = require("morgan")
const app = express();

let cors = require("cors");
var corsOptions = {
  origin: "*"
};


let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }

const bodyParser = require('body-parser');

//app.use(createRoles());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({secret:"SECRET"}));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'));
app.use(morgan("dev"))
app.use(authenticationMiddleware);

app.use((req,res,next)=>{
app.locals.user= req.session.user
next();
});

const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/producto");
const userRoutes = require("./routes/user");

const apiProductsRouter = require('./routes/api/productsRouter');
const apiUsersRouter = require('./routes/api/usersRouter');




app.use(express.static(path.resolve(__dirname, "./public")));
console.log(path.resolve(__dirname, "./public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/products", productRoutes);
app.use("/user", userRoutes);

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);

app.use((req, res, next) => {
  res.send("Error 404! File Not Found");
  next
});




// Server Init
const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Server escuchando en puerto http://localhost:3001'));
