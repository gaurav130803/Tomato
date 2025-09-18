import mongoose from "mongoose";

export const connectDB= async () =>{
    await mongoose.connect('mongodb+srv://chopragc03:Chopra!130803@cluster0.empkh.mongodb.net/food-del').then(()=>console.log("db connected"));
}
