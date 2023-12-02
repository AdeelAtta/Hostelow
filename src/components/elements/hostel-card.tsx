import Link from 'next/link'
import React from 'react'

const HostelCard = () => {
    return (
        <div className='relative card lg:flex max-w-screen-2xl p-4 border-2 border-gray-100 shadow-xl rounded-xl'>
            <div className=' hostel-image overflow-hidden max-w-[320px] h-auto'>
                <img className=' rounded-e-xl ' src="/assets/welcome_banner.png" alt="alt" />
            </div>
            <div className='flex-1 details w-full lg:p-4 flex flex-col  justify-between '>
                <div className='w-full flex flex-col lg:flex-row justify-between min-w-[320px]'>
                    <div className='min-w-fit'>
                        <h2 className='text-3xl md:text-3xl font-bold'>Fatima Girls Hostel</h2>
                        <p className='font-md text-lg text-gray-500'>0.4 km from city center</p>
                        <p className='font-md text-lg text-gray-500'>Free Cancellation . Breakfast Included</p>
                    </div>
                    <div className='absolute top-8 right-8 lg:static lg:ml-20 flex items-center justify-end lg:mr-5 gap-2 '>
                        <span className='text-right min-w-fit'>
                            <p className='text-xl font-bold text-green-600'>Excellent</p>
                            <p className='text-white text-lg lg:text-gray-500 min-w-fit'>1,400 reviews</p>
                        </span>
                        <span className='text-lg py-3 px-6 rounded-full border-2 border-green-400 text-green-600 bg-green-300'>9.6</span>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-between '>
                    <div className='min-w-fit'>
                        <h4 className='hidden lg:flex text-xl font-bold'>Shared Room</h4>
                        <p className='hidden lg:flex font-md text-lg text-gray-500'>3x per room</p>
                        <p className='hidden lg:flex font-md text-lg text-gray-500'>Fast Internet</p>
                        <p className='hidden lg:flex font-md text-lg text-gray-500'>1x attach bathroom</p>
                        <div className='mt-5'>
                            <span className='text-md py-3 px-4 mr-3 rounded-full border-2 border-purple-400 text-purple-400'>#Hot deals</span>
                            <span className='text-md py-3 px-4 mr-3 rounded-full border-2 border-purple-400 text-purple-400'>#Popular</span>
                        </div>
                    </div >
                    <div className='min-w-fit flex flex-col justify-end items-end gap-4 mt-5'>
                        <p className='font-bold  text-xl text-black'>Rs: 10,000 / month</p>
                        <button  className='w-full border-2 rounded-full font-medium text-xl text-white px-8 py-4 border-indigo-600 bg-indigo-500'><Link href={'/hostels/HostelDetail'}>See booking Options</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelCard