import React, { ChangeEvent, useEffect, useState } from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { FaCalendarAlt } from "react-icons/fa";
import { citiesData } from '@/utils/data';
import Select from "react-select";
import { useRouter } from 'next/router';
import Link from 'next/link';



const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
}

const HeroSection = () => {
    const router = useRouter();

    const [range, setRange] = useState<any>({ ...selectionRange })
    const [location, setLocation] = useState(``);
    const [citiesList, setCitiesList] = useState<any[]>([]);
    const [isRange, setIsRange] = useState(false)


    const handleDateRange = (e: any) => {
        setRange({ ...selectionRange, ...e.selection })
    }

    const handleSearch = () => {

        router.push({
            pathname: '/hostels',
            query: {
                location,
                startDate: range.startDate,
                endDate: range.endDate
            },
        });

    }


    useEffect(() => {

        const list = citiesData.map((city: any) => ({ value: `${city.name}`, label: `${city.name}` }))
        setCitiesList(list);

    }, [])

    return (

        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-">
            <div className='relative rounded-3xl flex flex-col items-center justify-center min-h-[400px] h-auto gap-4  mt-10  bg-[url(/assets/welcome_banner.png)] bg-center bg-no-repeat bg-cover text-white'>
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
                    Book your Stay With Hostel Bazaar.
                </h2>
                <p className='text-center text-lg px-8 py-3 sm:text-3xl font-md'>14,000,000 rooms around the world are waiting for you</p>
                <div className='rounded-xl flex flex-col items-center justify-center gap-4 md:flex-row z-[5] w-[90%]  sm:w-[70%] md:w-[90%] lg:w-[70%] absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] px-6 sm:px-10 pt-7 pb-9 lg:rounded-2xl bg-gray-100 text-gray-900' style={{ boxShadow: `rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px` }}>

                    <label htmlFor="location" className='flex flex-col w-full whitespace-nowrap font-semibold'>Select Your Hostel Location:
                        <Select required={true}
                            placeholder="Select your hostel City..."
                            defaultValue={[]}
                            name="location"
                            id="location"
                            options={citiesList ?? []}
                            className="basic-multi-select w-full z-[1] rounded-2xl min-w-full "
                            classNamePrefix="select user"
                            onChange={(e: any) => setLocation(e.value)}
                        />
                    </label>

                    <div className='flex-col sm:flex-row w-full flex items-center gap-3 relative '>
                        <label htmlFor="startDate" className='w-full md:w-auto flex-1 lg:flex-1 flex flex-col lg:min-w-fit font-semibold'>Starting Date:
                            <span id='startDate' className='bg-white flex justify-end items-center gap-10 cursor-pointer shadow-lg border-2 rounded-md min-w-[200px] text-center py-2 px-4 font-semibold max-w-[300px]' onClick={() => setIsRange(true)}>
                                {range.startDate ? new Date(range.startDate).toLocaleString().slice(0, 9).replaceAll(`/`, `-`) : `Start Date`} <FaCalendarAlt />
                            </span>
                        </label>
                        <label htmlFor="endDate" className='w-full md:w-auto flex-1 lg:flex-1 flex flex-col lg:min-w-fit font-semibold min-w-fit'>End Date:
                            <span className='bg-white flex justify-end items-center gap-10 cursor-pointer shadow-lg border-2 rounded-md min-w-[200px] text-center py-2 px-4 font-semibold max-w-[300px]' onClick={() => setIsRange(true)}>
                                {range.endDate ? new Date(range.endDate).toLocaleString().slice(0, 9).replaceAll(`/`, `-`) : `End Date`} <FaCalendarAlt />
                            </span>
                        </label>
                        {isRange && <span className={` absolute top-20 right-0`} onMouseLeave={() => setIsRange(false)}><DateRangePicker
                            ranges={[range]}
                            onChange={handleDateRange}
                            minDate={new Date()}
                            direction='horizontal'
                            staticRanges={[]}
                            showPreview={false}
                        />
                        </span>
                        }
                        
                        <Link
                            href={{
                                pathname: '/hostels',
                                query: {
                                    location,
                                    startDate: range.startDate,
                                    endDate: range.endDate,
                                },
                            }}
                        >
                            <button className=' ml-auto bg-black flex items-center justify-center rounded-full hover:scale-[0.97] transition cursor-pointer mt-5 p-2'><IoMdArrowRoundForward className=" text-4xl text-white transition-all" /></button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection