import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bycrpt from "bcrypt"
import validator from "validator"
import { response } from "express";


//login user
const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email}); 

        if(!user){
           return res.json({success:false,message:"user doesn't exist"});
        }

        const isMatch=await bycrpt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"invalid crendentials"});
        }

        const token= createToken(user._id);
        res.json({success:true,token});


    } catch (error) {
        console.log(error);
        res.jsonjson({success:false,message:"error"});
    }
}

const createToken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res)=>{
    const {name,password,email}=req.body;
    try {
        //cheching user already esxist
        const exist=await userModel.findOne({email})
        if(exist){
            return res.json({success:false,message:"User already exist"});
        }
        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter a valid email"});
        }

        if(password.length<8){
            return res.json({success:false,message:"password short"});
        }

         //hashing user password
         const salt= await bycrpt.genSalt(10);
         const hashPassword= await bycrpt.hash(password,salt);
         
         const newUser=new userModel({
            name:name,
            email:email,
            password:hashPassword,
            
         });

        const user= await newUser.save();
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"});
    }
}

export {loginUser,registerUser}