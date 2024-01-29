const { validationResult } = require("express-validator");

const db = require("../database/models")

const Product= db.Product

const productoController = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      console.log(products);
      res.render("productCart", { products });
    } catch (error) {
      res.send({ error });
    }
  },
  detail: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      res.render("productDetail", { product: product });
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
      products_categories_id: req.body.categoria
    }
    try {
      await Product.create(newObject);
      res.redirect("/");
    } catch (error) {
      console.log(error)
    }
  },
  edit: async (req, res) => {
    try {
      const productToEdit = await Product.findByPk(req.params.id);
      res.render("editarProducto", { productToEdit });
    } catch (error) {
      return res.send({ error });
    }
  },
  update: async (req,res) =>{
    try{
      await Product.update(
        {
          name: req.body.name,
          description: req.body.description,
          image: req.body.filename,
          price: req.body.price,
          products_categories_id: req.body.category
        },
        
        {
          where: { id: req.params.id }
        }
        
      );
      console.log(req.body)
      res.redirect("/products/list");
    }catch(error){
      return res.send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const productiDFound = await Product.findByPk(req.params.id);
      res.render("eliminarProducto", { productiDFound });
    } catch (error) {
      return res.send(error);
    }
  },
  destroy: async (req, res) => {
    try {
      await Product.destroy({ where: { id: req.params.id } });
      res.redirect("/products/list");
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = productoController;


