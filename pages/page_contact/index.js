import Link from 'next/link'
export default function Contact(){
    return (
        <>
            <section className=' h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h2 className='text-2xl font-semibold mt-6 m-6 text-center'>Let's talk</h2>
                <h1 className='text-4xl font-bold m-6 text-center'>Contact us </h1>
                <div className=' container'>
                    <div className='md:float-right text-center md:mr-12'>
                        <div className='relative '>
                            <label htmlFor='email' className=' block'>Email</label>
                            <input type="email" placeholder='email' id="email" className=' rounded-lg p-4 w-full  '/>
                        </div>
                        <div>
                            <label htmlFor='name'  className=' block'>name</label>
                            <input type="text" placeholder='email' id="name" className=' rounded-lg p-4 w-full' />
                        </div>
                        <div>
                            <label htmlFor='com'  className='ml-4 block'>commentaire</label>
                            <textarea type="text" className=' rounded-lg p-12 w-full ' />
                        </div>
                    </div>
                    <div className='md:float-left md:ml-12'>
                        <h1 className='text-4xl font-bold md:text-start text-center uppercase'>Get in touch</h1>
                        <div className='divide-y-2 text-center md:text-start md:mt-4 mt-6 pb-6 bg-gradient-to-r from-cyan-500 to-blue-500'>
                                <div className="p-4">
                                <p className='uppercase font-bold'>address</p>
                                <p>
                                    234 Oujda Rd AIN CHOUINET ,Morocco
                                </p>
                                </div>
                                <div className='p-4'>
                                <p className='uppercase font-bold'>phone</p>
                                <p>
                                    2736283479
                                </p>
                                </div>
                                <div className='p-4'>
                                <p className='uppercase font-bold'>email</p>
                                <p>
                                    hello@gmail.com
                                </p>
                                </div>
                                <div>
                                
                                </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}