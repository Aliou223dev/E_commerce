'use client'

import toast from "react-hot-toast"

import { useState,useEffect } from "react"
import { useCategory } from "../context/context"
import { NextResponse } from "next/server"

//import { CategoryContext } from "@/context/context"

export default function CreateCategory(res){
    
    const { 
        name, 
        setname, 
        update,
        setupdate,
        categories,
        setcategories,
        
        
        
      } = useCategory();
      const CreateCategory= async()=>{
        
        try {
             
            const response= await fetch("http://localhost:3000/api/admin/category/category",{
                method:"POST",
                headers:{"Content-Type":'application/json'},
                body:JSON.stringify({
                    name
                    
                })
            })
            
            if(response.ok){
                toast.success("successfully created")
                
                const newcreatedcategory= await response.json()
                console.log(newcreatedcategory)
                
                setname("")
                setcategories([...categories,newcreatedcategory])
                
                return res.status(200).json({message:"success"})
            }
            else{
                const errordata= await response.json()
                console.log(errordata)
                toast.error("error can't create category")
            }
            
        } catch (error) {
            return NextResponse.json( 
                { err: error.message, }, 
                { status: 500 }
        )
        }
    }
    const UpdateCategory= async()=>{
        try {
            const response= await fetch(`http://localhost:3000/api/admin/category/${update?._id}`,{
                method:"PUT",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify(update)
            })
            
            //console.log('Response Status:', response.status);
            if(!response.ok){
                toast.error("category not updated")
                //throw new Error("category not updated")
            }else{
               const updatedcategory=await response.json()
                console.log("Updated Category:", updatedcategory);
                setcategories(
                    categories?.map(item=>item?._id===updatedcategory?._id?updatedcategory:item)
                )
                console.log(categories)
                setupdate(null)
                toast.success("successfully updated category")
            }

        } catch (error) {
           console.log(error)
           toast.error("error updating")
        }
    }
    const DeleteCategory= async()=>{
        try {
            const response= await fetch(`http://localhost:3000/api/admin/category/${update._id}`,{
                method:"DELETE"
               
            })
            const deletecategory=await  response.json()
            console.log('status:', deletecategory);
            if(!response.ok){
                
                throw new Error("failed to reach the payload")
            }
            //const deletedcategory= await response.json()
            setcategories(
                categories.filter(item=>item._id!=deletecategory._id)
                )
            setupdate(null)
            toast.success("successfully deleted category")
        } catch (error) {
            console.log(error)
            toast.error("error deleting")
        
        }
    }
    return (
        <>
            <div>
                <input type="text" name="name"
                    value={update ? update?.name : name} 
                    onChange={e=>{
                        e.preventDefault()
                        update? setupdate({...update,name:e.target.value}):setname(e.target.value)
                         
                    }
                    }
                />
                <div>
                     <button   className="rounded-lg border-2 p-2 mt-4 hover:bg-cyan-200" type="submit" onClick={e=>{
                        e.preventDefault()
                        update? UpdateCategory():CreateCategory()
                     }}> 
                       {update?"Update":"Create"}
                    </button> 
                    
                     {update &&(
                        <>
                            <button onClick={e=>{
                                e.preventDefault();
                                DeleteCategory()
                            }} className="rounded-lg border-2 p-2 mt-4 hover:bg-cyan-200">
                                Delete
                            </button>
                            <button onClick={()=>setupdate(null)}className="rounded-lg border-2 p-2 mt-4 hover:bg-cyan-200">
                                Clear
                            </button>
                        </>
                    )} 
                </div>
            </div>
            </>
    )
}