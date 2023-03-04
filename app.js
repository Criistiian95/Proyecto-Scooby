const express = require("express");
const expressSession= require("express-session")
const path = require("path");
const cookieParser = require("cookie-parser");

const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/producto");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({secret:"SECRET"}));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "./public")));
console.log(path.resolve(__dirname, "./public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/products", productRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  res.send("Error 404! File Not Found");
});


// Server Init
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server escuchando en puerto http://localhost:3000'));
