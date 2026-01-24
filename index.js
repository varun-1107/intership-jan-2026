import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./src/helper/dbConection.js"
const app = express()
dotenv.config({quiet:true});
const PORT = process.env.PORT 
connectDB()
app.listen(3000,()=>{
    console.log("server is running on port ",PORT)
})