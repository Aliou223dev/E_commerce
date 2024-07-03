import Category from "@/models/category"
import bcrypt from "bcrypt"
import dbconnect from "@/database/dbconnect"
import slugify from "slugify"


export default async function GET(req,res){
    await dbconnect()
    try {
        const categories= await Category.find({})
        console.log(categories)
         res.status(200).json(categories)
    } catch (error) {
         res.status(500).json({error:error.message})
    }
}