const express = require('express');
const app = express();
const {body, validationResult} = require("express-validator");

const productValidations=[
   body('nombre', 'ingrese un nombre al producto')
   .exists(),
   body('descripcion', 'ingrese una descripción')
   .exists(),
   body('image', 'ingrese una imagen')
   .exists(),
   body('precio', 'ingrese el precio del producto')
   .isNumeric()
   .exists()
    ]
    
    
    module.exports= productValidations;