const express = require('express');
const app = express();
const {body, validationResult} = require("express-validator");

const productValidations=[
   body('nombre')
   .notEmpty().withMessage('ingrese un nombre al producto'),
   body('descripcion')
   .notEmpty().withMessage('ingrese una descripción'),
   body('image')
   .notEmpty().withMessage('ingrese una imagen'),
   body('precio')
   .isNumeric()
   .notEmpty().withMessage('ingrese el precio del producto')
    ];
    
    
    
    module.exports= productValidations;