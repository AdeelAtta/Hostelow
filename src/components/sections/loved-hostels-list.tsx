import React from 'react'
import { BsFillSuitHeartFill, BsHeart } from "react-icons/bs";
// import { BsFillSuitHeartFill } from "react-icons/bs";

const lovedHostelsList = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2
                    className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Hostels loved by Customers
                </h2>
                <div className=' gap-4 overflow-x-auto mt-10 sm:flex'>


                    <div className="relative block rounded-lg p-4 shadow-sm shadow-indigo-200 border-2">
                        <BsHeart className="absolute right-10 top-10 scale-[2] text-white " />
                        {/* <BsFillSuitHeartFill className="absolute right-10 top-10 scale-[2] text-white " /> */}
                        <img
                            alt="Home"
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-auto rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">$240,000</dd>
                                </div>

                                <div>
                                    <dt className="sr-only">Address</dt>

                                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="relative block rounded-lg p-4 shadow-sm shadow-indigo-200 border-2">
                        <BsHeart className="absolute right-10 top-10 scale-[2] text-white" />
                        {/* <BsFillSuitHeartFill className="absolute right-10 top-10 scale-[2] text-white " /> */}
                        <img
                            alt="Home"
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-auto rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">$240,000</dd>
                                </div>

                                <div>
                                    <dt className="sr-only">Address</dt>

                                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="relative block rounded-lg p-4 shadow-sm shadow-indigo-200 border-2">
                        <BsHeart className="absolute right-10 top-10 scale-[2] text-white " />
                        {/* <BsFillSuitHeartFill className="absolute right-10 top-10 scale-[2] text-white " /> */}
                        <img
                            alt="Home"
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-auto rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">$240,000</dd>
                                </div>

                                <div>
                                    <dt className="sr-only">Address</dt>

                                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                                </div>
                            </dl>
                        </div>
                    </div>






                </div>
            </div>
        </section>
    )
}

export default lovedHostelsList