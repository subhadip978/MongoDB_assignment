
const  Product=require("../model/product.model");

exports.createProduct=async(req,res)=>{

	try {
        const { title, imageurl, price, description, product } = req.body;

        const newProduct = new Product({
            title,
            imageurl,
            price,
            description,
            product
        });

        await newProduct.save();
        res.status(201).send("Product has been created");
    } catch (err) {
        console.log(err); 
    }

}


// Fetch all products from the 'products' collection
exports.getAllProducts = async (req, res, next) => {
    try {
        // Retrieve all documents from the 'products' collection
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        next(err); // Pass the error to the next middleware (error handler)
    }
};



exports.getProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        
        // Find a document in the 'products' collection by its ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.status(200).json(product);
    } catch (err) {
        next(err); // Pass the error to the next middleware (error handler)
    }
};
