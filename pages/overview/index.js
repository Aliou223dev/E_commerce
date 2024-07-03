
export default function Overview(props){
    return(
        <>
            <section className='h-full md:h-screen'>
                {props.array?.map(item=>(
                    <div>
                    <div className='md:float-right mt-6 flex justify-center  md:h-full '>
                    <img src={item.lien} height={375} width={650} className='md:rounded-lg '/>
                    </div>
                    <div className='text-center md:text-start md:pt-40'>
                        <h1 className='text-6xl font-bold md:pl-4'>Our principles !</h1>
                        <p className='mt-4 md:mt-6 md:p-4 md:text-2xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dictum nisi ac mattis. Aenean in ante in libero vestibulum gravida non et ligula. Cras cursus nibh nec odio molestie, at congue arcu sodales. Donec consectetur sed justo vel sagittis. Proin risus orci, venenatis eu pretium et, gravida sagittis tortor. Vestibulum finibus ante sit amet orci volutpat, vitae suscipit sapien suscipit. Donec vitae viverra orci. </p>
                    </div>
                    </div>
                ))}
                
            </section>
        </>
    )
}
export async function getStaticProps(){
    const data= await import("/data/product.json")
    const array= data.products
    return{
        props:{
            array
        }
    }
}