const express = require("express");
const expressSession= require("express-session")
const path = require("path");

const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({secret:"SECRET"}));


const port = process.env.PORT || 3002;
app.use(express.static(path.resolve(__dirname, "./public")));
console.log(path.resolve(__dirname, "./public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use((req, res, next) => {
  res.send("Error 404! File Not Found");
});


// Server Init
app.listen(port, () => console.log('Server escuchando en puerto http://localhost:3000'));
