import {Router} from "express"
import studentModel from "../../models/studentModel.js";
import { RESPONSE } from "../../config/golbal.js";
import {send, setErrmsg } from "../../helper/responseHelper.js"
const router =Router()

export default router.post("/",async(req,res)=>{
    try{
      const {name,rollno,email}=req.body ||{}
    //   console.log("name",name)
    //   console.log("rollno",rollno)
    //   console.log("email",email)

      if (!name || name == undefined){
        // return res.send({
        //     code:201,
        //     message:"name is mendatory"
        // })
        return send(res,setErrmsg("Name",RESPONSE.REQUIRED))
      }
      if (!email || email == undefined){
        // return res.send({
        //     code:201,
        //     message:"email is mendatory"
        // })
        return send(res,setErrmsg("email",RESPONSE.REQUIRED))
      }
      if (!rollno || rollno == undefined){
        // return res.send({
        //     code:201,
        //     message:"rollno is mendatory"
        // })
        return send(res,setErrmsg("rollno",RESPONSE.REQUIRED))
      }

      

let isRollnoExist = await studentModel.findOne({rollno:rollno})
        if(isRollnoExist){
             return send(res,setErrmsg("rollno",RESPONSE.ALREDY_EXISTS))
        }
        let isEmailValid = String(email).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        if(isEmailValid==null){
              return send(res,setErrmsg("email",RESPONSE.INVALID))
        }
let isEmailExist = await studentModel.findOne({email:email})
        if(isEmailExist){
              return send(res,setErrmsg("email",RESPONSE.ALREDY_EXISTS))
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