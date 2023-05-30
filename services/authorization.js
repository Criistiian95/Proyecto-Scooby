module.exports= {
authorization(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/user/login');
    }
    next();
},
notAuthorization(req,res,next){
    if (req.session.user){
        return res. redirect("/index")
    }
    next();
}

}