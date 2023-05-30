const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const db = require('../database/models')
const productsFilePath = path.join(__dirname, "../data/products.json")

const Product= db.Product

function getProducts() {
  const productJson = fs.readFileSync(
  productsFilePath,
    "utf-8"
  );
  const products = JSON.parse(productJson);
  return products
}



const controller = {
  index: async (req, res) => {
    try{
    const products = getProducts();
    const slider = products.filter(product => product.slider == true)
    const oferta = products.filter(product => product.oferta == true)
    const masVendidas = products.filter(product => product.mas_pedidas == true)
    
    res.render("index", { products, slider, oferta, masVendidas});
  }catch(error){
    res.send({ error });
  }
  },
  productCart: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      console.log(products);
      res.render("productCart",{products});
    } catch (error) {
      res.send({ error });
    }
  },
  admin:async (req, res) => {
    try{
      const productId = await Product.findAll();
      res.render("administrador", { productId });
  }catch(error){
    res.send(error)
  }
},
  register: (req, res) => {
    res.render("register");
  },
  edicYProd: (req, res) => {
    res.render("edicYProd");
  },
};

module.exports = controller;

