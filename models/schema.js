import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'
import dbconnect from "@/database/dbconnect";
const userSchema= new mongoose.Schema({
    name:String,
    pwd:String,
    email:String
},

)
userSchema.plugin(uniqueValidator)
export default mongoose.models.User ||mongoose.model("User",userSchema) 