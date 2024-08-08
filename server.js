
const express=require("express");
const app=express();

const mongoose=require('mongoose');
require('dotenv').config();


const connectDB=require("./db/index") ;


console.log(process.env.MONGODB_URI)



connectDB()