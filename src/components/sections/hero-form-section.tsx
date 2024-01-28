import React from 'react'
import InvestForm from '../forms/invest-form'
import Link from 'next/link'
import Button from '../elements/Button'

const HeroFormSection = () => {
    return (
        <section className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className='flex flex-col md:flex-row justify-center items-center gap-y-8'>
                <div className=''>
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl dark:text-white">Built for ambitious,forward thinking investors</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Get unbelievable returns on your money by investing with Hostelow Marketplace</p>
                    <div className='flex justify-start'>
                        <a href="#" className="inline-flex items-center justify-center  mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-2 md:px-5 py-2 md:py-3 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                </div>
                <InvestForm />
            </div>
            <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/hostel_small.png'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>type room</h3>
                    <div className="mt-2 grid grid-cols-3 py-3 border-l-2 border-r-2">
                        <div className='flex flex-col items-center justify-center px-2'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Total Space</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 border-l-2 border-r-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>occupancy</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Occupied</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Remaining</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Now!' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/hostel_small.png'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>type room</h3>
                    <div className="mt-2 grid grid-cols-3 py-3 border-l-2 border-r-2">
                        <div className='flex flex-col items-center justify-center px-2'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Total Space</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 border-l-2 border-r-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>occupancy</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Occupied</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Remaining</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Now!' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/hostel_small.png'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>type room</h3>
                    <div className="mt-2 grid grid-cols-3 py-3 border-l-2 border-r-2">
                        <div className='flex flex-col items-center justify-center px-2'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Total Space</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 border-l-2 border-r-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>occupancy</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Occupied</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Remaining</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Now!' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/hostel_small.png'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>type room</h3>
                    <div className="mt-2 grid grid-cols-3 py-3 border-l-2 border-r-2">
                        <div className='flex flex-col items-center justify-center px-2'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Total Space</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 border-l-2 border-r-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>occupancy</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Occupied</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>availability</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Remaining</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Now!' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default HeroFormSection
