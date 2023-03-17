const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");

const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");
function getProducts() {
  const productJson = fs.readFileSync(productsFilePath, "utf-8");
  const products = JSON.parse(productJson);
  return products;
}

const productoController = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      res.render("productCart", { products: products });
    } catch (error) {
      res.send({ error });
    }
  },
  detail: async (req, res) => {
    try {
      const productId = await db.Product.findByPk(req.params.id);
      const products = getProducts();
      res.render("productDetail", { product });
    } catch (error) {
      res.send({ error });
    }
  },
  create: async (req, res) => {
    res.render("createProduct");
  },
  processCreate: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("createProduct", { errors: errors.mapped() });
    }
    try {
      const products = getProducts();
      const newObject = {
        id: products[products.length - 1].id + 1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.file.filename,
        precio: req.body.precio,
        categoria: req.body.categoria,
      };
      await db.Product.create(newObject);
      products.push(newObject);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
      res.redirect("/");
    } catch (error) {
      return res.send({ error });
    }
  },
  edit: async (req, res) => {
    try {
      const productFind = await db.Product.findByPk(req.params.id);
      res.render("editarProducto", { productFind });
    } catch (error) {
      return res.send({ error });
    }
  },
  delete: async (req, res) => {
    try {
        const productiDFound = await db.Product.findByPk(req.params.id);
        res.render('editarProducto', { Product: product });
    } catch (error) {
        return res.send(error);
    }
},
  destroy: async (req, res) => {
    try {
      await db.Product.destroy({ where: { id: req.params.id } });
      res.redirect("/products");
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = productoController;
