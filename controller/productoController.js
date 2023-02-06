const fs = require('fs');
const path = require('path');


const productJson = fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf-8');
const products = JSON.parse(productJson);

const productoController = {
    list: (req, res) => {
        console.log(products);
        res.render('productCart', { products });
    }
}

module.exports = productoController;