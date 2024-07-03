import {useFormik} from 'formik'
import {signIn,signOut} from 'next-auth/react'
import Erros_message from '@/validation/loginValidate'
import { useRouter} from 'next/router'
import {toast} from 'react-hot-toast'
export default  function Login(){
    const router=useRouter()
    
    const handleSubmit= async (e)=>{
        e.preventDefault
        const result= await signIn("google",{callbackUrl:"https://localhost:3000"})
        if(result?.error){
            toast.error("oups")
        }else{
            toast.success("perfect you've signin")
            
        }
    }
   
    
    const formik= useFormik({
        initialValues:{
            email:'',
            pwd:''
        },
        validate:Erros_message,
        onSubmit
    })
    async function onSubmit(values){
         const status=await signIn("credentials",{
             redirect:false,
            email:values.email,
             pwd:values.pwd,
             callbackUrl:"/shop"
         })
         if(status.ok){
            router.push(status.url)
            toast.success("perfect")}
     }
    
    
    
    return (
        <>
        <section className='h-screen mt-9 '>
            <div className="  text-center container  ">
                <form onSubmit={formik.handleSubmit} className="md:w-2/5 w-3/5 pb-8 m-auto rounded-lg border-2 bg-cyan-200">
                    <div>
                        <label className="block  " htmlFor="mail">Email</label>
                        <input name="email" type='email' placeholder="email" id="mail" className="" {...formik.getFieldProps("email")} />
                        {formik.touched.email && formik.errors.email?(
                           <div style={{'color':'red'}}>{formik.errors.email} </div>
                        ):null}
                    </div>
                    <div>
                        <label className="block" htmlFor="pwd">Password</label>
                        <input name='pwd' type='password' placeholder="password" id="pwd" {...formik.getFieldProps("pwd")}/>
                        {formik.touched.pwd && formik.errors.pwd?(
                           <div style={{'color':'red'}}>{formik.errors.pwd} </div>
                        ):null}
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="border-2 p-2 rounded-lg bg-white hover:bg-slate-200">Login</button>
                    </div>
                    <div className="pt-4">
                        <button onClick={handleSubmit} type="submit" className="border-2 p-2 rounded-lg bg-white hover:bg-slate-200">Sign in with google</button>
                    </div>
                    <div className="pt-3">
                        <p>Don't have an account ? <a href="/register" className="underline">Register</a></p>
                    </div>
                </form>
            </div>
            </section>
        </>
    
     )}