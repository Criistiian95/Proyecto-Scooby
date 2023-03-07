const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json")

function getProducts() {
  const productJson = fs.readFileSync(
  productsFilePath,
    "utf-8"
  );
  const products = JSON.parse(productJson);
  return products
}

const productoController = {
  list: (req, res) => {
    const products = getProducts()
    res.render("productCart", { products: products });
  },
  detail: (req, res) => {
    const productID = req.params.id;
    const products = getProducts()
    const productFound = products.find(function (product) {
      return product.id == productID;
    });
    if (productFound) {
      res.render("productDetail", { product: productFound });
    } else {
      res.send("error");
    }
  },
  create: (req, res) => {
    res.render("createProduct");
  },
  processCreate: (req, res) => {
    const products = getProducts()
    const newObject = {
      id: products[products.length - 1].id + 1,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagen: req.file.filename,
      precio: req.body.precio,
      categoria: req.body.categoria,
    };

    // TODO: No se van a hacer las dos líneas cuando se haga lo de base de datos

    products.push(newObject); 
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
    res.redirect("/")

  },
  edit: (req, res) => {
    const productoEdit = products.find(
      (product) => product.id == req.params.id
    );
    res.render("editarProducto", { productoEdit });
  },
};

module.exports = productoController;
