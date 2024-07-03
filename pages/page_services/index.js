import {useState} from 'react'
import Link from 'next/link'
export default function Services(props){
    const [filter,setfilter]= useState(false)
    
    return (
        <>
            <section className='container'>
            
                <div className='flex'>
                
                    <h1 className='text-4xl font-bold text-sky-600 mt-6 ml-6'>Shop</h1>
                
                    <button onClick={()=>setfilter(!filter)} className='flex justify-between mt-9 ml-6 border-2'>
                        <span className='m-2 font-bold'>Filter</span>
                        <img src='/menu.svg' height={30} width={30} className='m-1'/>
                    </button>
                    
                
                
                {filter &&(
                    <aside className='h-full bg-cyan-200  border-2 absolute inset-y-0 left-0 w-50 transition duration-500 ease-out '>
                        <div>
                            <div className='flex'>
                            <h1 className='font-bold text-2xl m-2'>Products categories</h1>
                            <button onClick={()=>setfilter(!filter)} className='flex justify-between  ml-6 border-2'>
                        
                            <img src='/menu.svg' height={30} width={30} className='m-1'/>
                            </button>
                            </div>
                            <ul className='font-bold m-2'>
                                <li>
                                    <Link href="">Mugs </Link>
                                </li>
                                <li>
                                    <Link href="">T-shirts </Link>
                                </li>
                                <li>
                                    <Link href=""> Uncategorised</Link>
                                </li>
                            </ul>
                            <p className='m-2'>Filter by price</p>
                            <input type="range"/>
                        </div>
                    </aside>
                )}
                </div>
                
                
                <div className='container flex  mt-6 '>
                <div className='grid grid-cols-2 md:grid-cols-4  gap-4'>
                    {props.array?.map(item=>(
                        <div className='border-2 rounded-lg shadow-2xl text-center mb-6 mt-2 '>
                            <div className='flex justify-center mt-4'>
                            <a href="/overview">
                            <img src={item.lien} height={30} width={30} className=' items-center w-auto rounded-lg' />
                            </a>
                            </div>
                            <p className='m-2 font-bold text-2xl'>
                                {item.name}
                            </p>
                            <p className='text-center p-2'>
                                {item.desc}
                            </p>
                            <p className='m-4'>
                                {item.price}
                                <span className='m-2 line-through '>{item.sold_price} </span>
                            </p>
                        </div>
                    ))}
                </div>
                </div>
                
            </section>
            {/* POUR AVOIR UN AFFICHAGE COMME CELUI DES TAMPLATES DU NET */}
            {/* <section>
                <div className=''>
                    <ul className='grid grid-cols-2 md:grid-cols-4'>
                    {props.array?.map(item=>(
                        <li className='m-2'>
                            <div className=''>
                                <img src={item.lien} width={300} height={375} className=''/>
                                <p className='text-center'>{item.name} </p>
                                <p className='text-center'>{item.desc}</p>
                            </div>
                        </li>
                    ))}
                        
                    </ul>
                </div>
            </section> */}
        </>
    )
}

export async function getStaticProps(){
    const data= await import('/data/product.json')
    const array= data.products
    return {
        props:{
            array
        }
    }
}