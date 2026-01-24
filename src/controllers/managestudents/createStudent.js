import {Router} from "express"
import studentModel from "../../models/studentModel.js";
const router =Router()

export default router.post("/",async(req,res)=>{
    try{
      const {name,rollno,email}=req.body
// await studentModel.create({
//     name:name,
//     rollno:rollno,
//     email:email,
// })


    }catch(error){
        console.log("crate student",error)
    };
    
});