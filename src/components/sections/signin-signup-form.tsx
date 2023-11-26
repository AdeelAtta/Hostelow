import React, { ReactNode } from 'react'
import Circle from '../elements/Circle'

interface SigninSignupFormProps {
    children: ReactNode,
    title: string,
    para: string
}

const SigninSignupForm: React.FC<SigninSignupFormProps> = (
    { children, title, para }
) => {
    return (
        <main className='relative max-w-screen-2xl mx-auto px-4 py-4 md:py-12 text-black '>
            <div className=' flex flex-col md:flex-row min-h-[400px] max-w-screen-lg m-auto rounded-3xl shadow-xl'>
                <div className={`min-h-[150px] flex flex-col justify-center items-center flex-1 bg-[url(/assets/welcome_banner.png)] bg-center bg-no-repeat bg-cover text-white rounded-t-3xl md:rounded-e-none md:rounded-s-3xl`}>
                    <h3 className='text-2xl md:text-3xl font-normal leading-none'>Welcome To</h3>
                    <h1 className='text-3xl md:text-5xl font-extrabold leading-none'>HostelBazaar.</h1>
                </div>
                <div className='w-full flex flex-col justify-start items-center flex-1 md:px-4 py-8 bg-white rounded-b-3xl md:rounded-e-3xl md:rounded-s-none'>
                    <div className='w-11/12 sm:w-10/12 max-w-[400px] md:py-4'>
                        <div className='mb-4 md:mb-8'>
                            <h2 className='text-2xl md:text-4xl font-extrabold text-center md:mb-2'>{title}</h2>
                            <h3 className='text-base md:text-lg font-normal text-center'>{para}</h3>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <Circle customeStyle='bg-[#F6A1A1] left-0 lg:left-36 top-12 md:top-0' />
            <Circle customeStyle='bg-[#48BED8] right-0 md:right-80 md:right-48 top-0' />
            <Circle customeStyle='bg-[#FFDA56] left-4 md:left-48 bottom-0' />
            <Circle customeStyle='bg-[#A1F6DD] right-0 lg:right-28 bottom-24' />
        </main>
    )
}

export default SigninSignupForm
