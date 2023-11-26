import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Input from '../elements/Input';


const HeroSection = () => {
    return (

        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-">
            <div className='relative rounded-3xl flex flex-col items-center justify-center min-h-[400px] h-auto gap-4  mt-10  bg-[url(/assets/welcome_banner.png)] bg-center bg-no-repeat bg-cover text-white'>
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
                    Book your Stay With Hostel Bazaar.
                </h2>
                <p className='text-center text-lg px-8 py-3 sm:text-3xl font-md'>14,000,000 rooms around the world are waiting for you</p>
                <div className='flex flex-col gap-4 sm:flex-row z-[5] w-[70%] absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] px-14 py-4 rounded-2xl sm:rounded-full bg-white text-gray-900' style={{ boxShadow: `rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px` }}>
                    <Input type="text" name="location" placeHolder='location' handleChange={() => { }} />
                    <Input type="text" name="location" placeHolder='location' handleChange={() => { }} />
                    <span className='ml-auto bg-black p-4 rounded-full hover:scale-[0.97] transition cursor-pointer'><IoMdArrowRoundForward className="text-4xl text-white transition-all" /></span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection