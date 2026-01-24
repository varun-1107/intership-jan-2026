import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./src/helper/dbConection.js"
import router from "./routes.js"
const app = express()
dotenv.config({quiet:true});
const PORT = process.env.PORT 
connectDB()
router(app)
app.listen(3000,()=>{
    console.log("server is running on port ",PORT)
})