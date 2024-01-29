import React from 'react'
import router from 'next/router';
import { toast } from 'react-toastify';


const PopularDestinations = () => {


    const handleRoute = (city:string) => {

        if(city.length > 1){

            toast.success(`Comming Soon`);
            return
        }else{
            router.push(`/hostels?location=${city}`)
        }

    }



    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2
                    className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-10"
                >
                    Popular Destinations
                </h2>
                <div className='relative max-w-screen-2xl flex flex-col lg:flex-row  gap-6 justify-center items-center '>
                    <div className='flex flex-col md:flex-row gap-6 justify-center  max-w-screen-md w-full h-full'>
                        <div className='flex relative w-full h-full max-h-[500px]'>
                            <span onClick={()=>handleRoute(`jamshoro`)} className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Jamshoro</span>
                            <img className="rounded-xl w-full h-full max-h-[500px]" src="/assets/cities/jamshoro.jpeg" alt="" />
                        </div>
                        <div className='flex md:flex-col gap-6 items-center max-h-[500px]'>
                            <div className='flex rounded-3xl relative max-h-[230px]'>
                                <span onClick={()=>handleRoute(``)} className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Hyderabad</span>
                                <img className='rounded-xl ' src="/assets/cities/comingsoon.png"  alt="" />
                            </div>
                            <div className='flex rounded-3xl relative max-h-[240px]'>
                                <span onClick={()=>handleRoute(``)} className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Karachi</span>
                                <img className='rounded-xl' src="/assets/cities/comingsoon.png"  alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 justify-center  max-w-screen-md w-full h-full'>
                        <div className='flex relative w-full h-full max-h-[500px]'>
                            <span onClick={()=>handleRoute(`jamshoro`)} className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Jamshoro</span>
                            <img className="rounded-xl w-full h-full max-h-[500px]" src="/assets/cities/jamshoro.jpeg" alt="" />
                        </div>
                        <div className='flex md:flex-col gap-6 items-center max-h-[500px]'>
                            <div className='flex rounded-3xl relative max-h-[230px]'>
                                <span onClick={()=>handleRoute(``)} className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Islamabad</span>
                                <img className='rounded-xl ' src="/assets/cities/comingsoon.png"  alt="" />
                            </div>
                            <div className='flex rounded-3xl relative max-h-[240px]'>
                                <span onClick={()=>handleRoute(``)} className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Sukkur</span>
                                <img className='rounded-xl' src="/assets/cities/comingsoon.png"  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations