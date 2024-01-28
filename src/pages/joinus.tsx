import AdminRegisterForm from '@/components/forms/admin-register-form'
import React from 'react'

const Joinus = () => {
    return (
        <section className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 rounded-xl bg-[url(/assets/welcome_banner.png)] bg-contain bg-no-repeat  mt-20" >
            <div className='flex flex-col md:flex-row justify-center items-center gap-y-8 bg-[#4645454e] py-6'>
                <div className=''>
                    <h1 className="max-w-2xl p-2 mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">Welcome to the HostelBazaar Marketplace</h1>
                    <p className="max-w-2xl mb-6 font-medium text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Unlock new possibilities – showcase your unique hostel on our platform and welcome global travelers today!</p>
                    <div className='flex justify-start'>
                        <a href="#" className="inline-flex items-center justify-center  mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-2 md:px-5 py-2 md:py-3 text-sm font-medium text-center text-gray-100 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                </div>
                <AdminRegisterForm />
            </div>
        </section>
    )
}

export default Joinus
