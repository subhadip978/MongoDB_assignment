
const mongoose=require("mongoose");
const Cart=require("../model/cart.model")


exports.addToCart=async(req,res)=>{
const productId=req.params.id ;
try{

	const cartItem=await Cart.find({productId});

	if (cartItem.length!=0) {
		
		const updatedCartItem = await Cart.findOneAndUpdate(
			{ productId }, 
			{ $inc: { quantity: 1 } }, 
		  );
		res.status(200).json(cartItem );
	}
	else{
		
		if(Cart.length!=0){
			await Cart.deleteMany({ productId: productId });

		}

		const newCartItem = await Cart.create({  productId, quantity: 1 });

		res.status(200).json({ message: 'Product added to cart successfully',newCartItem });
	}
}catch(error){
	console.error('Error adding to cart:', error);


}

}


exports.deleteCartItem = async (req, res) => {
	const { userId, productId } = req.body; 
  
	try {
	 
	  const result = await Cart.deleteOne({ userId: userId, productId: productId });
  
	  if (result.deletedCount === 0) {
		
		return res.status(404).json({ message: 'Cart item not found' });
	  }
  
	  res.status(200).json({ message: 'Cart item removed successfully' });
	} catch (error) {
	  console.error('Error deleting cart item:', error);
	  res.status(500).json({ message: 'Error deleting cart item' });
	}
}

exports.getallcart=async(req,res)=>{

	try{




	}catch(err){
		console.log(err)
	}

}