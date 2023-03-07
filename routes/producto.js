const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productoController = require("../controller/productoController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-product" + path.extname(file.originalname))
  },
});

const upload = multer({ storage });

router.get("/list", productoController.list);
router.get("/productDetail/:id", productoController.detail);
router.post("/", upload.single("image"), productoController.processCreate);
router.get("/create", productoController.create);
router.get("/:id/edit", productoController.edit);
//router.put("/product/:id", productoController.);
//router.get("/product/:id", productoController.);

module.exports = router;
