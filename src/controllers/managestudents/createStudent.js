import {Router} from "express"
import studentModel from "../../models/studentModel.js";
const router =Router()

export default router.post("/",async(req,res)=>{
    try{
      const {name,rollno,email}=req.body ||{}
    //   console.log("name",name)
    //   console.log("rollno",rollno)
    //   console.log("email",email)

      if (!name || name == undefined){
        return res.send({
            code:201,
            message:"name is mendatory"
        })
      }
      if (!email || email == undefined){
        return res.send({
            code:201,
            message:"email is mendatory"
        })
      }
      if (!rollno || rollno == undefined){
        return res.send({
            code:201,
            message:"rollno is mendatory"
        })
      }

      

let isRollnoExist = await studentModel.findOne({rollno:rollno})
        if(isRollnoExist){
            return res.send({
                code:202,
                message:"roll number alredy exist"
            })
        }
        let isEmailValid = String(email).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        if(isEmailValid==null){
            return res.send({
                code:203,
                message:"invalid email format"
            })
        }
let isEmailExist = await studentModel.findOne({email:email})
        if(isEmailExist){
            return res.send({
                code:202,
                message:"email alredy exist"
            })
        }


        await studentModel.create({
            name:name,
            rollno:rollno,
            email:email,
})

return res.send({
    code:200,
    message:"student created sucefully"
})
    }catch(error){
        console.log("crate student",error)
        return res.send({
            code:500,
            message:"something went wrong"
        })
    };
    
});