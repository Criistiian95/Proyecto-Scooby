const express = require('express');
const router = express.Router();
const productsAPIController = require("../../controller/api/productsController")

router.get('/list', productsAPIController.list);
router.post('/create', productsAPIController.create);

module.exports = router;