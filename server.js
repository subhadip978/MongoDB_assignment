
const express=require("express");
const app=express();

const mongoose=require('mongoose');
const cors=require('cors');

require('dotenv').config();


app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(
	cors({
		origin:"http://localhost:5173",
		credentials:true
	})
)

const connectDB=require("./db/index") ;

const productRouter=require("./routers/router.product");
const cartRouter=require("./routers/router.cart")

app.use("/api",productRouter)
app.use("/api",cartRouter)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
