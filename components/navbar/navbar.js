import {useState} from 'react'
import Link from 'next/link'
export default function Navbar(){
    const [navbar,setnavbar]= useState(false)
    return (
        <>
            <nav className="bg-sky-50">
                <div className=' container '>
                    <div className='flex justify-between items-center md:h-16'>
                        
                        
                        <p>LOGO</p>
                        <div className=' hidden md:block '>
                            <div className=' items-center justify-end '>
                                <Link href="/" className='m-6 '>Home</Link>
                                <Link href="/page_aboutUs" className='m-6 '>About</Link>
                                <Link href="/page_services" className='m-6 '>Services</Link>
                                <Link href="/page_contact" className='m-6 '>Contact</Link>
                                <Link href="/login" className='m-6 '>Login</Link>
                                
                                
                            </div>  
                        </div>
                        <div className='bg-cyan-600 rounded-full p-2 items-center '>
                        <Link href="/shop" className=''><img src="/shop.png" height={30} width={30} className=''/> </Link>
                        </div>
                        <div className='md:hidden flex shrink-0 h-10 mt-2'>
                        <button onClick={()=>setnavbar(!navbar)} className='flex jusify-between'>
                            <img src='/menu.svg' height={30} width={30}/>
                        </button>
                        </div> 
                    </div>
                      

                    
                        
                    
                </div>
                {navbar &&(
                <aside className='md:hidden h-screen '>
                    <nav className=' container h-full flex flex-col shadow-sm'>
                    <div className="items-center p-4 m-auto divide-y-4">
                        <Link href="/" className='m-6 pb-8 block font-bold uppercase text-2xl hover:underline'>Home</Link>
                        <Link href="/page_aboutUs" className='m-6 pt-6 pb-8 block font-bold uppercase text-2xl hover:underline'>About</Link>
                        <Link href="/page_services" className='m-6 pt-6 pb-8 block font-bold uppercase text-2xl hover:underline'>Services</Link>
                        <Link href="/page_contact" className='m-6 pt-6 pb-8 block font-bold uppercase text-2xl hover:underline'>Contact</Link>
                               
                    </div>
                    </nav>
                </aside>
                )}
            </nav>
        </>
    )
}