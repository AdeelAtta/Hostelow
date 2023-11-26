import React from 'react'

const PopularDestinations = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2
                    className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Popular Destinations
                </h2>
                <div className='max-w-screen-2xl flex flex-col lg:flex-row  gap-6 justify-center items-center mt-10'>
                <div className='flex flex-col md:flex-row gap-6 justify-center  max-w-screen-md'>
                        <div className='flex relative'>
                            <span className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Karachi</span>
                            <img className="rounded-xl " src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224" alt="" />
                        </div>
                        <div className='flex md:flex-col gap-6 items-center'>
                            <div className='flex rounded-3xl relative'>
                            <span className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Lahore</span>
                                <img className='rounded-xl ' src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224" alt="" />
                            </div>
                            <div className='flex rounded-3xl relative'>
                            <span className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Jamshoro</span>
                                <img className='rounded-xl' src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 justify-center  max-w-screen-md'>
                        <div className='flex relative'>
                            <span className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Karachi</span>
                            <img className="rounded-xl " src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224" alt="" />
                        </div>
                        <div className='flex md:flex-col gap-6 items-center'>
                            <div className='flex rounded-3xl relative'>
                            <span className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Lahore</span>
                                <img className='rounded-xl ' src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224" alt="" />
                            </div>
                            <div className='flex rounded-3xl relative'>
                            <span className='absolute bottom-6 left-6 rounded-full bg-[#ffffff82] px-8 py-3 text-black text-md font-medium'>Jamshoro</span>
                                <img className='rounded-xl' src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224" alt="" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default PopularDestinations