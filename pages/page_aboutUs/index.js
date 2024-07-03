import Link from 'next/link'
export default function About(props){
    return (
        <>
            <section  className="container md:h-screen h-full   bg-[url('/collegue.jpg')] bg-fixed bg-center bg-cover ">
                <div className="text-start ml-6 pt-40 backdrop-blur-xs pb-12 ">
                    <h1 className="m-6 text-6xl text-white font-bold   ">Great Team makes Great Work</h1>
                    <p className="m-6 text-3xl text-red-200 font-semibold">Your Vision Our Mission</p>
                    <button className='border-2 p-4 rounded-lg m-6 text-white bg-cyan-600'>Explore more</button>
                </div>
                <div className='h-4/5'>
          
                </div>
            </section>
            <section className='h-full md:h-screen'>
                <div className='md:float-right mt-6 flex justify-center  md:h-full '>
                    <img src="/img-girl.jpg" height={375} width={650} className='md:rounded-lg '/>
                </div>
                <div className='text-center md:text-start md:pt-40'>
                    <h1 className='text-6xl font-bold md:pl-4'>Our principles !</h1>
                    <p className='mt-4 md:mt-6 md:p-4 md:text-2xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dictum nisi ac mattis. Aenean in ante in libero vestibulum gravida non et ligula. Cras cursus nibh nec odio molestie, at congue arcu sodales. Donec consectetur sed justo vel sagittis. Proin risus orci, venenatis eu pretium et, gravida sagittis tortor. Vestibulum finibus ante sit amet orci volutpat, vitae suscipit sapien suscipit. Donec vitae viverra orci. </p>
                </div>
            </section>
            
            <section className="container h-screen md:full mt-9 ">
                <div className="flex justify-center  md:mt-0 md:pt-0">
                    <img src='/team.jpg' className="rounded-full  flex justify-center" height={300} width={400}  />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-3xl text-center font-semibold">Hear from our team members</h1>
                </div>
                <div className='container   mt-6 '>
                <div className='grid grid-cols-2 md:grid-cols-3  gap-4'>
                    {props.array?.map(item=>(
                        <div className='border-2 rounded-lg shadow-2xl text-center mb-6 mt-2 '>
                            <div className='flex justify-center mt-4'>
                            <img src={item.lien} height={90} width={90} className='rounded-full items-center' />
                            </div>
                            <p className='m-2'>
                                {item.role}
                            </p>
                            <p>
                                {item.name}
                            </p>
                            <p className='m-4'>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
                </div>
                <footer className='bg-slate-100'>
                    <div className='container flex justify-between pt-6'>
                        <div className=' '>
                            <p className=' pb-2 font-bold text-2xl'>Optique Show Room</p>
                            <p className='pb-2'>175 Doha Oujda<br/>Morroco +212 658797061<br/>hello@exemple.com</p>

                        </div>
                        <div className=''>
                            <p className=' font-bold '>Support</p>
                            <ul className=''>
                              <li className='pb-2'>  <Link href="">Product help</Link></li>
                              <li className='pb-2'> <Link href=""> Learn and care</Link></li>
                              <li className='pb-2'><Link href="">Partner</Link></li>
                              <li className='pb-2'><Link href="">Community</Link></li>
                                
                            </ul>

                        </div>
                        <div className=' pb-6 '>
                            <p className='font-bold '>Company</p>
                            <ul className=''>
                              <li className='pb-2'> <Link href="">About us</Link></li>
                              <li className='pb-2'> <Link href=""> careers</Link></li>
                              <li className='pb-2'><Link href="">News & Press</Link></li>
                              <li className='pb-2'><Link href="">Investor Relation</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className=' m-2'>
                            <p className=''>Copyright 2024 C.ALIOU</p>
                        </div>
                        <div className='m-4'>
                            <input type="text" placeholder='Email Address' className='rounded-lg'/>
                            <button type="submit" className=' bg-orange-600 p-2 border-2 text-white rounded-lg'>Subscribe</button>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export async function getStaticProps(){
    const data = await import('/data/team.json')
    const array= data.members
    return {
        props:{
            array
        }
    }
}