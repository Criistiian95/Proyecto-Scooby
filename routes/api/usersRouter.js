const express = require('express');
const router = express.Router();
const usersAPIController = require("../../controller/api/usersController")

router.get('/', usersAPIController.list);
router.get('/:id', usersAPIController.getById)

module.exports = router;