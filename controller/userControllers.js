const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

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
      id: users.length + 1,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      contraseña: bcrypt.hashSync(req.body.contraseña),
      fecha_de_nacimiento: req.body.fecha_de_nacimiento,
      telefono: req.body.telefono,
      pais: req.body.pais,
      provincia: req.body.provincia,
      ciudad: req.body.ciudad,
      codigo_postal: req.body.codigo_postal,
      calle_y_numero: req.body.calle_y_numero,
    };
    users.push(newUser);
    fs.writeFileSync(
      path.join(__dirname, "../data/users.json"),
      JSON.stringify(users, null, 4)
    );
    res.redirect("/login");
  },
  processLogin: (req, res) => {
    const emailForm = req.body.email;
    const passwordForm = req.body.contraseña;
    const resultError =  validationResult(req);
    if(!resultError.isEmpty()){
     return res.render("login", { errors: resultError.mapped() })
    }
    const userFound = users.find((user) => {
      return (
        emailForm == user.email &&
        bcrypt.compareSync(passwordForm, user.contraseña)
      );
    });
    if (userFound){
      req.session.user = { 
        id: userFound.id,
        nombre: userFound.nombre,
        imagen: userFound.imagen,
        email: userFound.email
      }
      if (req.body.rememberme){
        res.cookie("recordame", userFound.id, { maxAge: 60000 * 60 * 24 })
      }
      res.redirect("/")
    } else {
      res.render("login", { errorMsg: "Error, credenciales inválidas" });
    }

  },
  logout: (req, res) => {
    req.session.destroy()
    res.clearCookie("recordame")
    res.redirect("/")
  }
};

module.exports = controller;
