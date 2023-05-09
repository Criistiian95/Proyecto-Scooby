const express = require('express');
const router = express.Router();
const productsAPIController = require("../../controller/api/productsController")

router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.getById)

module.exports = router;