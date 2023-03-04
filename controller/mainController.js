const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const productJson = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8");
const products = JSON.parse(productJson);


const controller = {
  index: (req, res) => {
    res.render("index", { products });
  },
  login: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("login", {
        session: req.session,
        errors: errors.mapped(),
      });
    }
    const { email, password } = req.body;
    req.session.email = email;
    req.session.password = password;
    console.log(req.session);
    res.render("login", { session: req.session });
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  register: (req, res) => {
    res.render("register");
  },
  edicYProd: (req, res) => {
    res.render("edicYProd");
  },
};

module.exports = controller;
