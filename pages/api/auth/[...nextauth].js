import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import  CredentialsProvider  from 'next-auth/providers/credentials'
import dbconnect from '@/database/dbconnect'
import User from "@/models/schema"
import {compare} from 'bcrypt'
import {toast} from 'react-hot-toast'
import { signIn } from 'next-auth/react'
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials,req){
                dbconnect().catch(error=>{error:"connection failed"})
                //check user existence
                const result= await User.findOne({email:credentials.email})
                if(result?.error){
                    toast.error("no user find with this email please sign up")
                }
                //compare password
                const checkpassword= await compare(credentials.pwd,result.pwd)
                //incorrect credentials
                if(!checkpassword || result.email!==credentials.email){
                    toast.error("username or password doesn't match")
                }
                return result
            }
            
        })
    ],
    //  callbacks:{
    //      async signIn(user){
    //          dbconnect()
    //          let dbuser= await User.findOne({email:user.email})
    //          if(!dbuser){
    //              dbuser= await new User({
    //                  email:user.email,
    //                  name:user.name
    //              }).save()
    //              console.log(dbuser)
    //          }
    //          return dbuser
    //      }
    //  }

})