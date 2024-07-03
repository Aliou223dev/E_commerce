import User from "@/models/schema"
import bcrypt from "bcrypt"
import dbconnect from "@/database/dbconnect"
export default async function POST( req,res) {
  
  
    const body= res.json()
    console.log("le body:",body)
    
    await dbconnect()
    try {
     const {name,pwd,email}= req.body
     
     
    const user= await new User({
      name,
      email,
      pwd: await bcrypt.hash(pwd, 10),
      }).save()
     console.log("user created:",user)
     return res.status(200).json({ succes: "Registered successfully"})
     
    } catch(error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
    
  //gut38t2kFuwRQpJS
 

  
  
  
}

