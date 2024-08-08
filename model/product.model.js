
const mongoose=require('mongoose');
const {Schema}=mongoose ;
const productSchema=new Schema({
	
	title: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    }


})

mongoose.model("Product",productSchema);