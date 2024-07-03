import { useFormik } from "formik"
import Register_errors from "@/validation/registerValidate"
import { useRouter } from "next/router"
import {toast} from 'react-hot-toast'
export default function Login(){
    const router=useRouter()
    const formik= useFormik({
        initialValues:{
            email:'', 
            name:'',
            pwd:'',
            cpwd:""
        },
        validate: Register_errors,
        onSubmit
    })
    async function onSubmit(values){
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }
        const result= await fetch("http://localhost:3000/api/auth/signup",options)
        if (result.ok){
            const good= await result.json()
            console.log(good)
            toast.success("perfect you're registered now go login")
            router.push("/login")
        }
    }
    
    return (
        <>
            <div className=" h-screen text-center container mt-9 ">
                <form className="md:w-2/5 bg-cyan-200 w-3/5 pb-8 m-auto mt-8 rounded-lg border-2 p-4" onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="block " htmlFor="name">name</label>
                        <input name="name" type='text' placeholder="name" id="name" {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name?(
                            <div style={{'color':'red'}}>{formik.errors.name} </div>
                        ):null}
                    </div>
                    <div>
                        <label className="block " htmlFor="mail">Email</label>
                        <input name="email" type='email' placeholder="email" id="mail" {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email?(
                            <div style={{'color':'red'}}>{formik.errors.email} </div>
                        ):null}
                    </div>
                    <div>
                        <label className="block" htmlFor="pwd">Password</label>
                        <input name="pwd" type='password' placeholder="password" id="pwd" {...formik.getFieldProps('pwd')} />
                        {formik.touched.pwd && formik.errors.pwd?(
                            <div style={{'color':'red'}}>{formik.errors.pwd} </div>
                        ):null}
                    </div>
                    <div>
                        <label className="block" htmlFor="cpwd"> confirm Password</label>
                        <input name="cpwd"
                         type='password' placeholder="password" id="cpwd" {...formik.getFieldProps('cpwd')}/>
                        {formik.touched.cpwd && formik.errors.cpwd?(
                            <div style={{'color':'red'}}>{formik.errors.cpwd} </div>
                        ):null}
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="border-2 p-2 rounded-lg bg-white hover:bg-cyan-200">Register</button>
                    </div>
                    
                    <div>
                        <p>Already have an account ? <a href="/login" className="underline">Login</a></p>
                    </div>
                </form>
            </div>
        </>
    
     )}