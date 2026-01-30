import { Router } from "express";
import { RESPONSE } from "../../config/golbal.js";
import studentModel from "../../models/studentModel.js";
import { send, setErrmsg } from "../../helper/responseHelper.js";
import { STATE } from "../../config/constant.js";
const router = Router();

export default router.get("/", async (req, res) => {
  try {
   
let page = req.query.page?Number(req.query.page):1;
let limit = req.query.limit?Number(req.query.limit):1;
let skip =(page-1)*limit;


    let student = await studentModel.find({

      isactive:STATE.INACTIVE,
    },
    { _v : 0},
    );
    if (student.length == 0){
      return send(res,setErrmsg("student",RESPONSE.NOT_FOUND))
    }

    return send(res,RESPONSE.SUCCES,student)
  } catch (error) {
    console.log("list student", error);
    return res.send({
      code: 500,
      message: "something went wrong",
    });
  }
});
