const express = require("express");
const adminController = require("../controller/adminController");

const router = express.Router();

router.get("/products", adminController.getProducts);

router.get("/products/:id",adminController.getProduct)

module.exports = router;
