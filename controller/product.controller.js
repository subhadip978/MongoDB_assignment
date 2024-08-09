
const  Product=require("../model/product.model");

exports.createProduct=async(req,res)=>{


	try {
        const { title, imageurl, price, description, product } = req.body;
        const newProduct=await Product.create({
            title,
            imageurl,
            price,
            description,
            product
        });
        res.status(201).json(
           
           newProduct
        );
    } catch (err) {
        console.log(err); 
        res.status(500).send("Error creating product");
    }

}


// Fetch all products from the 'products' collection
exports.getAllProducts = async (req, res, next) => {
    try {
   
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send("Errorin get all product");
}
}



exports.getProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).send("Error in getting product");
    }

}


    exports.deleteProduct=async(req,res)=>{
        const {productId}=req.params.id ;
        try{
            const result = await Product.deleteOne({  productId: productId });
            
            res.status(201).json("product deleted");


        }catch(err){
            console.log(err) ;
        }

    }

