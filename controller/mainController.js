const {validationResult}=require("express-validator")

const controller = {
    index: (req, res) => {
        res.render('index', {session:req.session});
    },
    login: (req, res) => {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.render('index',{session:req.session, errors:errors.mapped()})
        }
        const{email,password}= req.body;
        req.session.email=email;
        req.session.password=password;
        console.log(req.session); 
        res.render('login', {session:req.session});
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    register: (req, res) => {
        res.render('register');
    },
    edicYProd: (req, res) => {
        res.render('edicYProd');
    }
}

module.exports=controller;