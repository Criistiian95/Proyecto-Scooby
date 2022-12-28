import { Router } from "express";
import path, { dirname } from "path"
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

router
.get("/", (req, res, next) => {
    res.redirect("/home")
})
.get('/home', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
})
.get('/productDetail', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../views/productDetail.html')); 
})
.get('/productCart', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../views/productCart.html')); 
})
.get('/register', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../views/register.html')); 
})
.get('/login', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../views/login.html')); 
});

export default router;