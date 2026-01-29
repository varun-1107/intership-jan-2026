import { response } from "express"

export const send =(res,response,data={})=>{

   
    
    return res.send({
        responseCode:response.code,
        responseMassaage:response.message,
        responseData:data,
    })
}
 export const setErrmsg =(param,response)=>{
    return{
        code:response.code,
        message:`${param} ${response.message}`,
    }
 }