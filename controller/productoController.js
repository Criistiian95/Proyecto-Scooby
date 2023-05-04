const { validationResult } = require("express-validator");

const db = require("../database/models");

const Product = db.Product;


const productoController = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      res.locals.products= products;
      res.render("productCart");
    } catch (error) {
      res.send({ error });
    }
  },
  detail: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      res.render("productDetail", { product:product });
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
      console.log(errors)
      return res.render("createProduct", { errors: errors.mapped(), oldData: req.body });
    }
    const newObject = {
      name: req.body.nombre,
       description: req.body.descripcion,
       image: req.file ? req.file.filename : '',
       price: req.body.precio,
       categories: req.body.categoria,
    }
    try {
      await db.Product.create(newObject);
      res.redirect("/");
    } catch (error) {
     console.log(error)
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
