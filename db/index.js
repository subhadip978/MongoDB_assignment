const mongoose=require('mongoose');

const DB_NAME=require("../utils/constant");

const connectDB=async ()=>{

	try{
		console.log(process.env.MONGODB_URI)
		await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) ;
		console.log("MongoDB connected ")


	}catch(error){
		console.log("MONGODB CONNECTION ERROR: ", error);
		process.exit(1);


	}

}

module.exports= connectDB  ;
