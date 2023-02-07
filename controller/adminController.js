const productService = require("../services/adminService");

const adminController = {
  getProducts: (req, res) => {
    let { products } = productService.getProducts();
    res.json(products);
  },
  getProduct: (req, res) => {
    let id = req.params.id;
    let { product } = productService.getProduct(id);
    res.json(product);
  },
};

module.exports = adminController;
