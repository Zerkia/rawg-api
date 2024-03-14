import mongoose from "mongoose";

export default () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }
  mongoose
    .connect("mongodb://127.0.0.1:27017/rawgDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));
};
