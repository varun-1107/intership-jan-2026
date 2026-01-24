import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://varumiranda00:qNbg4bi2kKrk4iy8@cluster0.5f6wnnm.mongodb.net/?appName=Cluster0",
      { dbname: "intership-jan-2026" },
    )
    .then(() => console.log("Connected!"))
    .catch((err) => console.log("err while conecting to DB", err));
};
export default connectDB