'use client'
import CreateCategory from "@/components/category/createcategory"
import { useSession,signOut } from "next-auth/react"
import { getSession } from "next-auth/react"
import {toast} from 'react-hot-toast'
import CategoryList from "@/components/category/listcategory"
import CategoryProvider from '@/components/context/context'
export default function Shop(){
    const handleSignOut= async ()=>{
        const result = await signOut()
        if(result?.error){
            toast.error("error")
        }else{
            toast.success("you've signout")
        }
    }
    const {data:session}=useSession()
    return(
        <CategoryProvider>
            {session && (
                <div className="text-center">
                    <h1>Product card</h1>
                    <button onClick={handleSignOut} className="border-2 p-2 hover:bg-cyan-200">Log out</button>
                    <div className="mt-6">
                        <CreateCategory/>
                    </div>
                    <div className="text-center mt-6"> 
                        <div className=""> 
                        <p className="lead mb-4">List of Categories</p> 
                        <CategoryList /> 
                        </div> 
                    </div>
                </div>
            )}
        </CategoryProvider>
    )
}

export async function getServerSideProps({req}){
    const session= await getSession({req})
    
    if(!session){
        return {
            redirect:{
                destination:"/login",
                permanent:false
            }
        }
    }
    return {
        props:{
            session
        }
    }
}