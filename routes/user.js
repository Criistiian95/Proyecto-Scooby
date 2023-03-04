const express=require("express");
const userController = require("../controller/userControllers");
const loginValidations = require("../validators/loginValidators");
const router=express.Router();

router.get("/login", userController.login);
router.post("/login", loginValidations, userController.processLogin);
router.get("/register", userController.register);
router.post("/register", userController.processRegister);

module.exports=router;