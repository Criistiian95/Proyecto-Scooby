const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productoController = require("../controller/productoController");
const productsValidations = require("../validators/productsValidators");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      const folder = path.join(__dirname, '../public/images');
      cb(null, folder);
  },
  filename: (req, file, cb) => {
      const fileName = `${Date.now()}-user${path.extname(file.originalname)}`;
      cb(null, fileName);
  }
});

const upload = multer({ storage });

router.get("/list", productoController.list);
router.get("/productDetail/:id", productoController.detail);
router.post("/create", upload.single("filename"), productoController.processCreate);
router.get("/create", productoController.create);
router.get("/:id/edit", productoController.edit);
router.get("/product/delete/:id", productoController.delete);
router.delete("/products/delete/:id", productoController.destroy);
router.post("/create", productsValidations, productoController.processCreate)
//router.put("/product/:id", productoController.);


module.exports = router;
