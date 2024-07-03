export default function Erros_message(values){
    const errors={}
    if(!values.email){
        errors.email='Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid email"
    }
    if(!values.pwd){
        errors.pwd='Required'
    }else if(values.pwd.length<8){
        errors.pwd="Too short"
    }else if(values.pwd===""){
        errors.pwd="Please choose a password"
    }
    return errors
}