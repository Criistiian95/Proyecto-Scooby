const express=require("express");
const userController = require("../controller/userControllers");
const router=express.Router();

router.get("/login", userController.login);
router.post("/login", userController.processLogin);
router.get("/register", userController.register);
router.post("/register", userController.processRegister);

module.exports=router;