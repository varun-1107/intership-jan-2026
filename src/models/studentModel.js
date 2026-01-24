import mongoose from "mongoose";
const Schema = mongoose.Schema;
const studentSchema = new Schema({
 name: { type: String, required:true },
 email: { type: String, required:true },
 rollno: { type: String, required:true },
 isactive: { type: Number, default: 1},
});
export default mongoose.model("students",studentSchema)