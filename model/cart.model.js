const mongoose=require("mongoose");

const {Schema}=require("mongoose");

const cartSchema=new Schema({
	// userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', 
    //     required: true
    // },

	productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
    },

	quantity: {
        type: Number,
        default: 1, 
        required: true
    }

})

const Cart=mongoose.model("Cart",cartSchema);
module.exports=Cart ;