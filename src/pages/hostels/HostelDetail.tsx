import React, { useState, useRef } from 'react';
import { FaWifi } from "react-icons/fa";
import { WiSandstorm } from "react-icons/wi";
import { FaShower } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { GrDirections } from "react-icons/gr";
import { IoIosStopwatch } from "react-icons/io";
import Button from '@/components/elements/Button';

const HostelDetail = () => {

  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      title: 'Overview',
      content: (
        <>
          <h3 className='text-lg text-black font-bold leading-normal'>Property Overview</h3>
          <ul className='max-w-sm mt-4 grid grid-cols-2 gap-2'>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black'>
              <i><FaWifi /></i>
              <h5 className='text-sm'>Free wifi</h5>
            </li>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black'>
              <i><WiSandstorm /></i>
              <h5 className='text-sm'>Air Conditioning</h5>
            </li>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black'>
              <i><FaShower /></i>
              <h5 className='text-sm'>Private bathroom</h5>
            </li>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black'>
              <i><FaAddressCard /></i>
              <h5 className='text-sm'>Key Card Access</h5>
            </li>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black'>
              <i><LuParkingSquare /></i>
              <h5 className='text-sm'>Free Parking</h5>
            </li>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black'>
              <i><GrDirections /></i>
              <h5 className='text-sm'>Transport Facilitation</h5>
            </li>
            <li className='w-full flex gap-2 md:gap-6 items-center text-black '>
              <i><IoIosStopwatch /></i>
              <h5 className='text-sm'>24-hour front desk</h5>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Rooms',
      content: (
        <h3 className='text-lg text-black font-bold leading-normal'>Rooms</h3>
      ),
    },
    {
      title: 'Amentions',
      content: (
        <h3 className='text-lg text-black font-bold leading-normal'>Amentions</h3>
      ),
    },
    {
      title: 'Policies',
      content: (
        <h3 className='text-lg text-black font-bold leading-normal'>Policies</h3>
      ),
    },
  ];

  return (
    <main>
      <section className='max-w-screen-xl mx-auto p-4 xl:p-0 xl:py-6 '>
        {/* Hostel Gallery */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-lg">
            <img src="/assets/hostel_large.png" alt="Hostel Main Image" className='w-full' />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <img src="/assets/hostel_large.png" alt="Hostel Main Image" className='w-full' />
            <img src="/assets/hostel_small.png" alt="Hostel Main Image" className='w-full' />
            <img src="/assets/hostel_small.png" alt="Hostel Main Image" className='w-full' />
            <img src="/assets/hostel_large.png" alt="Hostel Main Image" className='w-full' />
          </div>
        </div>
        {/* Tabs Section */}
        <div className='relative my-4'>
          <h3 className='text-black text-2xl font-bold'>Hostel Jamshoro</h3>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full flex flex-col gap-y-2'>
              <div className='grid grid-cols-2 gap-x-4 md:grid-cols-4 md:flex lg:gap-x-4 font-bold text-black'>
                {items.map((item, index) => (
                  <button
                    ref={index === 0 ? firstBtnRef : null}
                    key={index}
                    onClick={() => setSelectedTab(index)}
                    className={`w-32 py-2 border-b-2 hover:border-[#0F172A] text-left md:text-cneter ${selectedTab === index ? 'border-[#0F172A] text-black' : ' text-gray-400 border-transparent'} `}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className='w-full'>
                {items.map((item, index) => (
                  <div className={`${selectedTab === index ? '' : 'hidden'}`} key={index}>
                    <div className='w-full'>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS CARD */}
      <section className='bg-[#f8f8f8] text-black py-4'>
        <div className='max-w-screen-xl mx-auto  p-4 xl:p-0 xl:py-6'>
          <h3 className='text-black text-2xl font-bold mb-4'>Rooms</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8'>
            {/* CARD */}
            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100 bg-white">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-32 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <h3 className='text-2xl font-bold'>Double standard room</h3>
                <h4 className='text-[#7D7D7D] text-base'>18 sqm</h4>
                <h4 className='text-[#7D7D7D] text-base'>2 people</h4>
                <h4 className='text-[#7D7D7D] text-base'>1 King bed or 2 separate beds</h4>
                <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
              </div>
            </div>
            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100 bg-white">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-32 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <h3 className='text-2xl font-bold'>Double standard room</h3>
                <h4 className='text-[#7D7D7D] text-base'>18 sqm</h4>
                <h4 className='text-[#7D7D7D] text-base'>2 people</h4>
                <h4 className='text-[#7D7D7D] text-base'>1 King bed or 2 separate beds</h4>
                <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
              </div>
            </div>
            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100 bg-white">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-32 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <h3 className='text-2xl font-bold'>Double standard room</h3>
                <h4 className='text-[#7D7D7D] text-base'>18 sqm</h4>
                <h4 className='text-[#7D7D7D] text-base'>2 people</h4>
                <h4 className='text-[#7D7D7D] text-base'>1 King bed or 2 separate beds</h4>
                <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
              </div>
            </div>
            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100 bg-white">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-32 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <h3 className='text-2xl font-bold'>Double standard room</h3>
                <h4 className='text-[#7D7D7D] text-base'>18 sqm</h4>
                <h4 className='text-[#7D7D7D] text-base'>2 people</h4>
                <h4 className='text-[#7D7D7D] text-base'>1 King bed or 2 separate beds</h4>
                <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
              </div>
            </div>
          </div>

          {/* REVIEWS */}
          <section className='py-4'>
            <h3 className='text-black text-2xl font-bold mb-4'>Reviews</h3>
            <div className='relative'>
              <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="file" className='text-[#7D7D7D] font-lg'>Cleanliness</label>
                <progress id="file" value="75" max="100"
                  className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-violet-400"> 32% </progress>
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="file" className='text-[#7D7D7D] font-lg'>Amenities</label>
                <progress id="file" value="65" max="100"
                  className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-violet-400"> 32% </progress>
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="file" className='text-[#7D7D7D] font-lg'>Location</label>
                <progress id="file" value="100" max="100"
                  className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-violet-400"> 32% </progress>
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="file" className='text-[#7D7D7D] font-lg'>Comfort</label>
                <progress id="file" value="20" max="100"
                  className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-violet-400"> 32% </progress>
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="file" className='text-[#7D7D7D] font-lg'>Network & Wifi Connection</label>
                <progress id="file" value="32" max="100"
                  className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-violet-400"> 32% </progress>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default HostelDetail
