import Button from '@/components/elements/Button';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const BookingConfirmed = () => {
  return (
    <section className='max-w-screen-xl mx-auto text-black py-4 px-4 xl:px-0 xl:py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-1 border-2 shadow-lg rounded-lg p-4 flex flex-col order-2 md:order-1'>
          <img src="/assets/hotell4.png" alt="" />
          <div className='flex flex-col gap-y-2 md:gap-y-3 py-4 border-b-2'>
            <h2 className='leading-none text-md md:text-xl font-bold'>Double Standard Room **</h2>
            <p className='text-[#7D7D7D] text-sm'>4-star hostel room located at jamshoro near Sindh University</p>
            <div className='flex flex-col gap-y-2 lg:gap-y-3'>
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className='...'>
                  <span>Allotment</span>
                </div>
                <div className='lg:col-span-3 text-[#7D7D7D]'>Friday, 28th july 2023</div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div>
                  <span>Allowed Till </span>
                </div>
                <div className='lg:col-span-3 text-[#7D7D7D]'>Monday, 28th oct 2023</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-3 md:gap-y-4 pt-4'>
            <h2 className='leading-none text-md md:text-xl font-bold'>Double Standard Room plus</h2>
          </div>
        </div>
        <div className='flex-1 border-2 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center md:gap-y-2 order-1 md:order-2'>
          <FaCheckCircle className="text-7xl text-green-300" />
          <h3 className='text-lg md:text-xl font-bold'>Congratulations!</h3>
          <h3 className='text-base md:text-xl font-bold text-center'>Your Booking is Now Confirmed!</h3>
        </div>
      </div>
      <div className='border-b-2 p-6'>
        <div className='flex flex-col gap-y-3'>
          <h2 className='leading-none text-md md:text-xl font-bold'>Your allotment starts Friday, 28th July 2023</h2>
          <div className='flex flex-col gap-y-2 lg:gap-y-3'>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
              <div className='...'>
                <span className='font-bold'>Allotment</span>
              </div>
              <div className='lg:col-span-3 text-[#7D7D7D]'>Friday, 28th july 2023</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
              <div>
                <span className='font-bold'>Allowed Till </span>
              </div>
              <div className='lg:col-span-3 text-[#7D7D7D]'>Monday, 28th oct 2023</div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-b-2 p-6'>
        <div className='flex flex-col gap-y-2 lg:gap-y-3'>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <div className='...'>
              <span className='font-bold'>Hotel Address</span>
            </div>
            <div className='lg:col-span-3 text-[#7D7D7D]'>Norrebrogade 9, 10178 Copenhagen, Denmark</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <div>
              <span className='font-bold'>E-mail </span>
            </div>
            <div className='lg:col-span-3 text-[#7D7D7D]'>mail@gmail.com</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <div>
              <span className='font-bold'>Telephone </span>
            </div>
            <div className='lg:col-span-3 text-[#7D7D7D]'>+92-0123456789</div>
          </div>
        </div>
      </div>
     
     
      <div className='p-6'>
        <div className='flex flex-col gap-y-2 lg:gap-y-3'>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <div className='...'>
              <span className='font-bold'>Total Price</span>
            </div>
            <div className='lg:col-span-3 text-[#7D7D7D]'>Rs. 8100/=</div>
          </div>
          <div className='flex flex-col md:flex-row gap-6 mt-3'>
            <Button text='Contact Warden' type='button' customeStyle='p-4 px-8'/>
            <Button text='Cancel Allotment' type='button' customeStyle='bg-transparent text-[blue] border-blue-500 border p-4 px-8'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingConfirmed
