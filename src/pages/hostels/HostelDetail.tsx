import Image from 'next/image'
import React from 'react'

const HostelDetail = () => {
  return (
    <section className='max-w-screen-xl mx-auto py-6'>
      {/* Hostel Gallery */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg">
          <img src="/assets/hostel_large.png" alt="Hostel Main Image" className='w-full' />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <img src="/assets/hostel_large.png" alt="Hostel Main Image" className='w-full' />
          <img src="/assets/hostel_small.png" alt="Hostel Main Image" className='w-full' />
          <img src="/assets/hostel_small.png" alt="Hostel Main Image" className='w-full' />
          <img src="/assets/hostel_large.png" alt="Hostel Main Image" className='w-full' />
        </div>
      </div>
    </section>
  )
}

export default HostelDetail
