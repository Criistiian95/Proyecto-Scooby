const express = require("express");
const router = express.Router();
const mainController = require('../controller/mainController')
const loginValidator = require("../validators/loginValidators");
const {isAdmin,isClient}= require("../validators/rolesMidllewares")



router.get("/", mainController.index);
router.get("/index", mainController.index);
router.get("/edicYProd", mainController.edicYProd);
router.get('/cliente', isClient, (req, res) => {
    res.send('Bienvenido, cliente');
});
router.get('/admin', isAdmin, mainController.admin)
module.exports = router;