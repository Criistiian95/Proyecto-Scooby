const {body}=require("express-validator")
const loginValidations=[
body("email").isEmail().withMessage("El formato de mail no es valido").notEmpty().withMessage("El campo es requerido"),
body("password").notEmpty().withMessage("El campo es requerido"),
]

module.exports= loginValidations;