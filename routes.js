import createStudent from "./src/controllers/managestudents/createStudent.js"

const router =(app)=>{
    app.use("/api/create-student",createStudent)
}
export default router;