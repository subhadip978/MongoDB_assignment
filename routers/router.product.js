const express= require("express");

const app= express();


const router=express.Router();

const {createProduct,getAllProducts,getProductById, deleteProduct}=require("../controller/product.controller");

router.post("/createproduct",createProduct);
router.get("/findallproducts",getAllProducts)
router.get("/findproduct/:id",getProductById)
router.delete("/deleteproduct/:id",deleteProduct);

module.exports=router ;