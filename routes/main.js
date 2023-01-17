const express=require("express");

const mainController = require('../controller/mainController')

const router=express.Router();

router.get("/", mainController.index);
router.get("/index", mainController.index);
router.get('/login', mainController.login);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);
router.get("/register", mainController.register);
router.get("/edicYProd", mainController.edicYProd);

module.exports=router;