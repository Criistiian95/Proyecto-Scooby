const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");

const usersJson = fs.readFileSync(
  path.join(__dirname, "../data/users.json"),
  "utf-8"
);
const users = JSON.parse(usersJson);

const controller = {
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  processRegister: (req, res) => {
    const newUser = {
        id: users.length + 1 ,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contraseña: req.body.contraseña,
        fecha_de_nacimiento: req.body.fecha_de_nacimiento,
        telefono: req.body.telefono,
        pais: req.body.pais,
        provincia: req.body.provincia,
        ciudad: req.body.ciudad,
        codigo_postal: req.body.codigo_postal,
        calle_y_numero: req.body.calle_y_numero
    }
    users.push(newUser);
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(users, null, 4));
    res.redirect("/login")
  },
  processLogin: (req, res) => {

  }
};

module.exports = controller;
