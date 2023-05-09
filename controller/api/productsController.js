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
}

module.exports = controller;
