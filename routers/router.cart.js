const express=require("express");

const router=express.Router();

const {addToCart, deleteCartItem}=require("../controller/cart.controller");

router.post("/getcart/:id",addToCart);
// router.get("/getallcart",getallCart);
router.get("/deletecart/:id",deleteCartItem);

module.exports=router 