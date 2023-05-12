const express=require("express");

const mainController = require('../controller/mainController')
const loginValidator= require("../validators/loginValidators");
const router=express.Router();

router.get("/", mainController.index);
router.get("/index", mainController.index);
router.get("/login", mainController.login);
router.post("/",loginValidator,mainController.login);
router.get("/register", mainController.register);
router.get("/edicYProd", mainController.edicYProd);

module.exports=router;