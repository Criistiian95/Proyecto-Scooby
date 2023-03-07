const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const productsFilePath = path.join(__dirname, "../data/products.json")

function getProducts() {
  const productJson = fs.readFileSync(
  productsFilePath,
    "utf-8"
  );
  const products = JSON.parse(productJson);
  return products
}



const controller = {
  index: (req, res) => {
    const products = getProducts();
    const slider = products.filter(product => product.slider == true)
    const oferta = products.filter(product => product.oferta == true)
    const masVendidas = products.filter(product => product.mas_pedidas == true)
    res.render("index", { products, slider, oferta, masVendidas });
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

// agregarle al form de crear un campo para las mas vendidas si o no 