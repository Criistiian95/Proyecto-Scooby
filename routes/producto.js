const express=require("express");
const router=express.Router();
const productoController = require("../controller/productoController");

router.get("/list", productoController.list);
//router.get("/create", productoController.);
//router.get("/product/:id", productoController.);
//router.post("/product", productoController.);
//router.get("/product/:id/edit", productoController.);
//router.put("/product/:id", productoController.);
//router.get("/product/:id", productoController.);

module.exports = router;