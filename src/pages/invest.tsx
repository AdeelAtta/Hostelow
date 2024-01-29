import Link from 'next/link'
import Button from '@/components/elements/Button'
import HeroFormSection from '@/components/sections/hero-form-section'

const invest = () => {
    return (
        <section className="mx-auto max-w-screen-2xl  py-12 lg:py-16 ">
            <HeroFormSection />
            <hr className='mt-10'/>
            <h2 className="px-2 max-w-2xl mt-10 text-3xl font-bold md:text-5xl xl:text-6xl dark:text-white">Present Deals</h2>
            <p>A quick snapshot of deals from the Future</p>
            <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/invest/hostel1.jpeg'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>Prince Boys Hostel</h3>
                    <div className="mt-2 grid grid-cols-4 gap-2 py-3  ">
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>13</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Rooms</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center  whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>66%</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Occupancy</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-sm font-bold'>25 Lac</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Investment</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-sm font-bold'>18%</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Returns</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Plans(Comming soon)' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/invest/hostel2.jpeg'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>2nd Home Boys Hostel</h3>
                    <div className="mt-2 grid grid-cols-4 gap-2 py-3  ">
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>5</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Rooms</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center  whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>70%</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Occupancy</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-sm font-bold'>10 Lac</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Investment</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-sm font-bold'>15%</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Returns</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Plans(Comming soon)' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
                <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                    <img
                        alt="Home"
                        src='/assets/invest/hostel3.jpeg'
                        className="h-48 w-full rounded-md object-cover"
                    />
                    <h3 className='text-2xl font-bold'>Iqbal Boys Hostel, Jamshoro</h3>
                    <div className="mt-2 grid grid-cols-4 gap-2 py-3 ">
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>17</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Rooms</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center  whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>60%</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Occupancy</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-sm font-bold'>37 Lac</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Investment</p>
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center mx-2 whitespace-nowrap'>
                            <h4 className='text-[#7D7D7D] text-sm font-bold'>21%</h4>
                            <p className='text-[#7D7D7D] text-sm font-thin min-w-fit whitespace-nowrap text-center px-2'>Returns</p>
                        </div>
                    </div>
                    <Link href="">
                        <Button text='Invest Plans(Comming soon)' type='button' customeStyle='w-full my-4' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default invest
