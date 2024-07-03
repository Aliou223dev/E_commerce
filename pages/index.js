import Link from 'next/link'
import Caroussel  from './caroussel'


let sliders=[
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/boss.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/chanel.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/demetz.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/faconnable.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/gucci.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/giorgioarmani.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/julbo.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/lukkas.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/rayban.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/tomford.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/oscarversion.jpg",
  "https://www.optical-center.fr/workspace/medias/images/logo_HD/persol.jpg"
]

export default function Home() {
  
  return (
    <>
      <section className=" container md:h-screen bg-[url('/img-man.jpg')] bg-cover bg-fixed bg-center md:bg-top">
        <div className='md:shadow-2xl '>
        <p className='  font-mono pt-40 text-white md:text-justify   md:text-6xl ml-6 text-7xl'>Optique Show Room</p>
        </div>
        <div className='flex mt-12 '>
          <button className='  hover:bg-slate-100 p-2 m-6 border-4 '>
            <Link href="/shop">Shop now</Link>
          </button>
          <button className='  hover:bg-slate-100 p-2 m-6 border-4 '>
            <Link href="">Find more</Link>
          </button>
        </div>
        
        <div className='md:flex text-center md:justify-between border-y-4  p-2 mt-8 bg-slate-100'>
          <p><span className='text-6xl font-bold'> +600K</span> <br/><span className='text-2xl m-12  font-semibold'>Followers</span></p>
          <p> <span className='text-6xl font-bold'>+2000</span> <br/><span className='text-2xl m-12  font-semibold'>Products</span></p>
          <p> <span className='text-6xl font-bold'>+100K</span> <br/><span className='text-2xl m-12  font-semibold'>Satisfied Customers</span></p>

        </div>
        
        
        <div className='h-4/5'>
          
        </div>
      </section>
      <section className="container  h-screen bg-[url('/img-oldlady.jpg')] bg-cover bg-fixed bg-left md:bg-center ">
          <div className='md:text-end text-white md:text-dark text-center  pt-40 md:pt-40 pr-12'>
            <h1 className='m-6 text-4xl hover:text-sky-500 '> Let's Magic touches you</h1>
            <p className='m-6  text-2xl hover:text-amber-600'>Premium Quality</p>
            <p className='m-6  text-1xl hover:text-sky-900'>Follow us on </p>
            <div className='container flex justify-center md:justify-end md:pr-3 '>
            <Link href='' className='items-center m-2'>
            <img src='/facebook.png' height={30} width={30} className='' />
            </Link>
            <Link href='' className='items-center m-2 '>
            <img src='/snapchat.png' height={30} width={30} className='' />
            </Link>
            <Link href='' className='items-center m-2'>
            <img src='/instagram.png' height={30} width={30} className='' />
            </Link>
            </div>
            
          </div>
          
          <div className='h-4/5'>
          
        </div>
      </section>
       <section className=''>
        <div className='bg-gray-400 mb-9  p-6'>
          <h1 className='text-5xl text-center '>Our partners</h1>
        </div>
        <Caroussel>
          {sliders.map(items=>(
            <img src={items} />
          ))}
        </Caroussel>
      </section>
       
    </>
  )
}
