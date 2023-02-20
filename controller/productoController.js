const fs = require("fs");
const path = require("path");

const productJson = fs.readFileSync(
  path.join(__dirname, "../src/data/products.json"),
  "utf-8"
);
const products = JSON.parse(productJson);

const productoController = {
    list: (req, res) => {
        console.log(products);
        res.render('productCart', { products:products });
    },
  detail: (req, res) => {
    const productID = req.params.id;

    const productFound = products.find(function (product) {
      return product.id == productID;
    });

        if(products){
            res.render('productDetail', { products: productFound });
        } else{
            res.send('error');
        }
    },
    create:(req,res)=>{

       res.render('edicYProd');
       
    },
    edit: (req, res) => {
		const productoEdit = products.find((product) => product.id == req.params.id);
		res.render('editarProducto', { productoEdit });}
}

module.exports = productoController;
