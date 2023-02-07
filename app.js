// ************ Require's ************ 
const express=require("express");
const path= require("path");

const productRouter = require('./routes/producto')


// ************ express() - (don't touch) ************
const app= express();
const port = process.env.PORT|| 3000 ;


// ************ Middlewares - (don't touch) ************
app.use(express.static(path.resolve(__dirname,'./public')));
console.log(path.resolve(__dirname,'./public'))


// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));


// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRoutes=require("./routes/main")


app.use('/', mainRoutes);
app.use('/products', productRouter);


app.use("/",(req,res,next)=>{
    res.send("Error 404! File Not Found")
});



// Server Init
app.listen(port, () => console.log(`Server escuchando en puerto ${port}`));