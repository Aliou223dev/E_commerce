import Category from "@/models/category"
import bcrypt from "bcrypt"
import dbconnect from "@/database/dbconnect"
import slugify from "slugify"
import { NextResponse } from "next/server"

export default async function POST(req,res){
    await dbconnect()
    
    
    
    try {
        const {name}=req.body
        console.log("le req",req.body)
        const category= await  Category.create({
            name,
            slug:slugify(name)
        })
        console.log(category)
         res.status(200).json({success:"suceesfully created"})
    } catch (error) {
         res.status(500).json({error:error.message}) 
    }
}