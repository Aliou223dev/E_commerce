export default function Register_errors(values){
    const errors={}
    if(!values.email){
        errors.email='Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid email"
    }
    if(!values.name){
        errors.name='Required'
    }else if(values.name.length>10){
        errors.name="Too long"
    }
    
    if(!values.pwd){
        errors.pwd='Required'
    }else if(values.pwd.length<8){
        errors.pwd="Too short"
    }else if(values.pwd===""){
        errors.pwd="Please choose a password"
    }
    if(!values.cpwd){
        errors.cpwd='Required'
    }else if(values.cpwd !== values.pwd){
        errors.cpwd="Passwords not match"
    }else if(values.cpwd===""){
        errors.cpwd="Please confirm the password"
    }
    return errors
}