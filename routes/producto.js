const express=require("express");
const router=express.Router();
const productoController = require("../controller/productoController");

router.get("/list", productoController.list);
router.get("/detail/:id", productoController.detail);
router.get("/create", productoController.create);
router.get("/:id/edit", productoController.edit);
//router.put("/product/:id", productoController.);
//router.get("/product/:id", productoController.);

module.exports = router;