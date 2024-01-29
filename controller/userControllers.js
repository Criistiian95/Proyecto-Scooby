const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")

//requiero base de datos
const db = require("../database/models/")

//asocio el modelo


const controller = {
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  processRegister: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", { errors: errors.mapped(), oldData: req.body });
    }
    const newUser = {
      name: req.body.nombre,
      last_name: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.contraseña),
      birth_date: req.body.fecha_de_nacimiento,
      tel: req.body.telefono,
      country: req.body.pais,
      province: req.body.provincia,
      city: req.body.ciudad,
      postal_code: req.body.codigo_postal,
      street: req.body.calle_y_numero

    };
    try {
      await db.User.create(newUser)

      

      const token= jwt.sign({id: newUser.id},"SECRET",{
        expiresIn: 86400
      })
      console.log(token)
      res.redirect("/");

    } catch (error) {
      console.log(error)
    }
  },
  processLogin: async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.render("login", { errors: errors.mapped(), oldData: req.body })
    }
    try {
      const user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
        include: [{ model: db.Role, as: 'role' }]
      });
      if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return res.render("login", { errorsmsg:"El usuario o la contraseña no existe" })
      }
      const roleName = user.role ? user.role.name : null;

      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        provincie: user.province,
        role: roleName
      };
      if(req.body.recordarme){
        res.cookie('email',req.session.user.email,{maxAge: 1000 * 60 * 60 * 24})
      }
      req.session.save((err) => {
        if (err) {
          console.log(err);
        }
      res.redirect("/index");
      })
    } catch (error) {
      res.send(error)
    }
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.clearCookie('email');
      console.log("Cierre exitoso");
      res.redirect('/');
    });
  }
}


module.exports = controller;
