import mongoose from "mongoose";

const dbconnect= async()=>{
    if(mongoose.connect.readyState>=1){
        return
    }
    mongoose.connect(process.env.MONGO_URL)
} 
export default dbconnect  