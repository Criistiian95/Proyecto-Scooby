const express=require("express");
const userController = require("../controller/userControllers");
const loginValidations = require("../validators/loginValidators");
const registerValidations = require("../validators/registerValidators");
const router = express.Router();
const {authorization,notAuthorization}= require("../services/authorization")


router.get("/login",notAuthorization, userController.login);
router.post("/login",notAuthorization, loginValidations, userController.processLogin);
router.get("/register",notAuthorization, userController.register);
router.post("/register", registerValidations, userController.processRegister);
router.get('/logout', userController.logout);

module.exports=router;