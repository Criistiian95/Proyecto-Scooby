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
    ];
    (req,res)=>{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
         const valores = req.body
         const validaciones = errors.array()
         res.render('create', {validaciones: validaciones, valores})
      }else{
         res.send('¡validación exitosa!')
      }
    }
    
    
    module.exports= productValidations;