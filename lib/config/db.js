import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect("mongodb+srv://newapi:29042024@cluster0.at1ed93.mongodb.net/todo-app");
  console.log("DB Connected");
};
