import Navbar from "../navbar/navbar"

export default function Container({children}){
    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}