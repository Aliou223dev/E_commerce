import Category from "@/models/category"

import dbconnect from "@/database/dbconnect"
import slugify from "slugify"
import { NextResponse } from "next/server"


export default async function PUT(req,res){
    await dbconnect()
    
    
    try {
        const { id } = req.query;
        // const { name } = req.body;
        // console.log("Name:", name)
        console.log("le req",req.body)

        // if (!name || typeof name !== 'string') {
        //     return res.status(400).json({ error: "Name must be a string" });
        // }
        const updatecategory= await Category.findByIdAndUpdate(id,{...req.body} ,{new:true})
        console.log(updatecategory)
        res.status(200).json(updatecategory)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export async function DELETE(req,res){
     await dbconnect()
     try {
        const deletecategory= await Category.findByIdAndDelete(req.query.id)
        if (!deletecategory) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        res.status(200).json(deletecategory)
     } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
     }
}