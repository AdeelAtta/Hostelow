import React, { ReactNode } from 'react'

interface SigninSignupFormProps {
    children: ReactNode,
    title: string,
    para: string
}

const SigninSignupForm: React.FC<SigninSignupFormProps> = (
    { children, title, para }
) => {
    return (
        <main className='max-w-screen-2xl m-auto px-4 py-4 md:py-12 text-black '>
            <div className='flex flex-col md:flex-row min-h-[400px] max-w-screen-lg m-auto rounded-3xl overflow-hidden shadow-xl'>
                <div className={`min-h-[150px] flex flex-col justify-center items-center flex-1 bg-[url(/assets/welcome_banner.png)] bg-center bg-no-repeat bg-cover text-white opacity-80`}>
                    <h3 className='text-2xl md:text-3xl font-normal leading-none'>Welcome To</h3>
                    <h1 className='text-3xl md:text-5xl font-extrabold leading-none'>HostelBazaar.</h1>
                </div>
                <div className='flex flex-col justify-start items-center flex-1 p-4'>
                    <div className='max-w-5xl md:py-4'>
                        <div className='mb-4 md:mb-8'>
                            <h2 className='text-2xl md:text-4xl font-extrabold text-center md:mb-2'>{title}</h2>
                            <h3 className='text-base md:text-lg font-normal text-center'>{para}</h3>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SigninSignupForm
