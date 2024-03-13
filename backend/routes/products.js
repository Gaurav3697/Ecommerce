import  express  from "express";
import { createProduct,deleteProduct,getAllProducts, productDetail, updateProduct } from '../controller/productControllers.js';

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(201).send("This is the product page")
});
router.get("/products",getAllProducts);
router.post("/products/new",createProduct);
router.put("/products/:id",updateProduct);
router.delete("/products/:id",deleteProduct);
router.get("/products/:id",productDetail);

export default router;