import Button from "@/components/elements/Button"
import NewsLettersSignupForm from "@/components/sections/news-letters-signup-form"
import Image from 'next/image'
import Logo from '@/assets/common/HostelBazaar.png'

const about = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-white dark:bg-gray-900">
                <div className=" relative flex flex-col justify-between h-full max-w-6xl mx-auto">
                    <div className="w-full flex items-center justify-center py-20 my-10 bg-[#7f7f7f4c] relative">
                        <div className="w-full h-full absolute backdrop:blur-xl"></div>
                          <Image
                  className='w-min h-auto min-w-[280px]'
                  src={Logo}
                  height={30}
                  width={220}
                  alt="Hostel Bazaar logo" /></div>
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">About Us</h2>
                    <p className="mb-12 text-xl text-gray-500 dark:text-gray-300 text-justify">Welcome to <strong>HostelBazaar</strong>, where the journey to finding your ideal student accommodation becomes seamless and stress-free. At HostelBazaar, we understand the challenges that students and young professionals face when it comes to securing suitable living spaces. Our mission is to revolutionize the way you search for and connect with private hostels, ensuring that your accommodation experience is nothing short of exceptional.</p>
                    <div className="w-full">
                        <div className="flex flex-col w-full mb-10 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Seamless Relocation</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Whether you are moving for studies, work, or a new adventure, our user-friendly interface ensures a smooth booking process, allowing you to focus on settling into your new city.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Transitional Living Solutions</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Designed with the unique needs of students and job seekers in mind, our platform offers a diverse array of accommodations in cities across the globe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-5 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Transparent Details</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Your peace of mind matters. Each listing provides comprehensive information, from essential amenities to insights on local communities, helping you make informed decisions for your transition.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Safe and Secure</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Trust your relocation plans with us. We prioritize the security of your bookings, offering a secure and reliable transaction process for worry-free transitions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Streamlined Convenience</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">
                                            Discover ease in every step with our platform integrated features: smart search filters for tailored results, an effortless booking system, insightful reviews, and a responsive ticket issue resolution – all in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLettersSignupForm />
        </section>
    )
}

export default about
