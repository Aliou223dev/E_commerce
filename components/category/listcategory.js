"use client"; 
import { useState, useEffect } from "react"; 
import toast from "react-hot-toast"; 
import  {useCategory}  from "@/components/context/context"; 
import { NextResponse } from "next/server"
export default function CategoryList(){
   const {categories,setupdate,setcategories}=useCategory()
    
    const fetchCategory= async()=>{
        
      try {
          
          const response = await fetch("http://localhost:3000/api/category/categoryfetch")
          const data= await response.json()
          console.log(data)
          if(!response.ok){
              //throw new Error("fetching failed")
              toast.error("failed to load the package")
              return res.status(500).json({message:"error"})
          }else{
            setcategories(data)
            
          }
   
      } catch (error) {
          console.log(error)
          toast.error("error occured")
      }
  }
    useEffect(() => { 
        fetchCategory(); 
      }, []); 
      return (
        <>
          <div className=''>
            
              <div className="" key="key">
                {categories?.map(c=>(
                  <button className="rounded-lg border-2 p-2 mt-4 hover:bg-cyan-200" onClick={()=>{
                    setupdate(c)
                    
                  }}>
                  {c.name}
                  </button>
                ))}
              </div>
          
            
          </div>
        </>
      )
      
}
