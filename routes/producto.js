const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productoController = require("../controller/productoController");
const productsValidations = require("../validators/productsValidators");
const {authorization,notAuthorization}= require("../services/authorization")
const {isAdmin,isClient}= require("../validators/rolesMidllewares")


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

router.get("/list",authorization,isClient, productoController.list);

router.get("/productDetail/:id",isAdmin, productoController.detail);
router.post("/create", upload.single("filename"),productsValidations, productoController.processCreate);
router.get("/create",authorization,isAdmin, productoController.create);
router.get("/:id/edit",isAdmin, productoController.edit);
router.put("/:id",productoController.update)
router.get("/delete/:id",isAdmin, productoController.delete);
router.delete("/delete/:id", productoController.destroy);
//router.post("/create", productsValidations, productoController.processCreate)
//router.put("/product/:id", productoController.);


module.exports = router;
