import createStudent from "./src/controllers/managestudents/createStudent.js";
import listStudent from "./src/controllers/managestudents/listStudent.js";

const router = (app) => {
  app.use("/api/create-student", createStudent);
  app.use("/api/list-student", listStudent);
};
export default router;
