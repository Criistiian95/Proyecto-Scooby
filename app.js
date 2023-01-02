import path, { dirname } from "path"
import { fileURLToPath } from 'url';
import express from "express";
// Routes
import indexRouter from './src/routes/indexRouter.js';
//
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
//Server 
const app = express()
const port = process.env.PORT || 3000;
// Server Config
app.use(express.static(path.resolve(__dirname,'./public')));
console.log(path.resolve(__dirname,'./public'))
app.use("/",indexRouter);
app.use("/*",(req,res,next)=>{
    res.send("Error 404! File Not Found")
});

// Server Init
app.listen(port, () => console.log(`Server escuchando en puerto ${port}`));