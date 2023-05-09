const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require("path");
const Products = db.Product;
const Categories = db.Category;

const controller = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      const response = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/product",
        },
        data: products,
      };
      res.send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send({
          status: 404,
          error: "Producto no encontrado",
        });
      }
      const response = {
        meta: {
          status: 200,
          url: `api/product/${product.id}`,
        },
        data: product,
      };
      res.send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: (req, res) => {
    Products.create({
      name: req.body.nombre,
      description: req.body.descripcion,
      price: req.body.precio,
      image: req.file ? req.file.filename : '',
      category: req.body.category,
    })
      .then((confirm) => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/products/create",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/products/create",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = controller;
