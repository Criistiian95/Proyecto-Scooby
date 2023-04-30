const {body} = require('express-validator');

const registerValidations = [
    body('nombre').notEmpty().isLength({ min: 2}).withMessage('Debe escribir un nombre'),
    body('apellido').notEmpty().isLength({ min: 2}).withMessage('Debe escribir un apellido'),
    body('email').notEmpty().isEmail().withMessage('Por favor escriba un email'),
    body('contraseña').notEmpty().isLength({ min: 8}).withMessage('Escriba una contraseña'),
    body('recontraseña').notEmpty().isLength({ min: 8}).withMessage('Vuelva a escribir su contraseña'),
    body('fecha_de_nacimiento').notEmpty(),
    body('telefono').notEmpty(),
    body('pais').notEmpty(),
    body('provincia').notEmpty(),
    body('ciudad').notEmpty(),
    body('codigo_postal').notEmpty(),
    body('calle_y_numero').notEmpty(),
]

module.exports = registerValidations;