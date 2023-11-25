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
        <main className='max-w-screen-2xl py-12 text-black'>
            <div className='flex flex-col md:flex-row min-h-[400px] max-w-screen-lg m-auto rounded-3xl overflow-hidden shadow-xl'>
                <div className={`flex flex-col justify-center items-center flex-1 bg-[url(/assets/welcome_banner.png)] bg-center bg-no-repeat bg-cover text-white opacity-80`}>
                    <h3 className='text-[30px] font-normal leading-none'>Welcome To</h3>
                    <h1 className='text-[48px] font-extrabold leading-none'>HostelBazaar.</h1>
                </div>
                <div className='flex flex-col justify-start items-center flex-1'>
                    <div className='max-w-5xl'>
                        <div className='my-8'>
                            <h2 className='text-[40px] font-extrabold text-center'>{title}</h2>
                            <h3 className='text-[17px] font-normal'>{para}</h3>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SigninSignupForm
