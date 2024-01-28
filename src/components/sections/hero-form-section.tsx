import React from 'react'
import InvestForm from '../forms/invest-form'

const HeroFormSection = () => {
    return (
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
    )
}

export default HeroFormSection
