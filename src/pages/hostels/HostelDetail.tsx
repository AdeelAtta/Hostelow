import { useState, useEffect, useRef } from 'react';
import { FaWifi } from "react-icons/fa";
import { WiSandstorm } from "react-icons/wi";
import { FaShower } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { GrDirections } from "react-icons/gr";
import { IoIosStopwatch } from "react-icons/io";

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
                <div className={`${selectedTab === index ? '' : 'hidden'}`}>
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
  )
}

export default HostelDetail
