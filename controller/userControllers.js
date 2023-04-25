const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

//requiero base de datos
const db= require("../database/models/")

//asocio el modelo
const User= db.User

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
  processLogin: async (req, res) => {
    try {
      const user= await db.User.findOne({
        where:{
          email: req.body.email
        }
      });
      if(!user){
        return res.render("login",{errors: { unauthorize:{ msg: "Usuario y/o contraseña invalidos"}}});
        }
        if (!bcrypt.compareSync(req.body.password, user.password)){
          return res.render("login", {errors:{unauthorize: { msg: "Usuario y/o contraseña invalidos"}}})
        }
        req.session.user={
          id:user.id,
          email: user.email,
          provincia: user.provincia
        };
        res.redirect("/index");
      } catch(error){
        res.send(error)
      }
    },
  logout: (req, res) => {
   delete req.session.user;
   res.redirect("/")
  }
}


module.exports = controller;
