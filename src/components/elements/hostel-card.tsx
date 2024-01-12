import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type HostelCardProps = {
    listStyle: boolean
    property:propertyProps
}

type propertyProps = {
    userId:string
    _id:string,
    thumbnail: string
    title:string,
    desc:string,
    location:string,
    price:number,
    discountPrice:number
    amentities:null | any
    rating:number
    reviews:null | any
    rooms:null | any
    date:string
    isPublished:boolean

}



const HostelCard: React.FC<HostelCardProps> = ({ listStyle, property }) => {
    return (
        <div className={`${listStyle ? ` flex-col lg:flex-row ` : `flex-col `} relative card flex ml-auto mr-auto p-4 border-2 border-gray-100 shadow-xl rounded-xl`}>
            <div className=' hostel-image overflow-hidden max-w-[320px] h-auto min-h-[300px]'>
                <Image 
                    width={300}
                    height={300}
                    className=' rounded-e-xl w-full h-full min-w-[300px]'
                    src={property.thumbnail}
                    alt={property.title}
                />
            </div>

            <div className={`${listStyle ? ` lg:p-4 `:``} py-2 flex-1 details w-full flex flex-col  justify-between `}>
                <div className={`${listStyle ? `flex-col lg:flex-row ` : ` flex-col `} w-full flex justify-between min-w-[320px]`}>
                    <div className='min-w-fit'>
                        <h2 className='text-2xl lg:text-3xl font-bold'>{property.title}</h2>
                        <p className='font-md text-sm md:text-md lg:text-lg text-gray-500'>0.4 km from city center</p>
                        <p className='font-md text-sm md:text-md lg:text-lg text-gray-500'>Free Cancellation . Breakfast Included</p>
                    </div>
                    <div className={`${listStyle ? `lg:static ml-20` : ` `} absolute z-[5] top-8 right-6  flex items-center justify-end lg:mr-5 gap-2 `}>
                        <span className='text-right min-w-fit'>
                            <p className='text-xl font-bold text-green-600'>Excellent</p>
                           {property.reviews && <p className={`${listStyle ? `lg:text-gray-500 `:`  `} text-white text-lg min-w-fit`}>{property.reviews} reviews</p>}
                        </span>
                        {(property.rating >= 0) && <span className='text-lg py-3 px-5 rounded-full border-[1px] border-green-400 text-green-600 bg-green-300'>{property.rating}</span>}
                    </div>
                </div>
                <div className={`${listStyle ? ` flex-col lg:flex-row ` : ` flex-col `} w-full flex  justify-between `}>
                    <div className='min-w-fit'>
                        <h4 className='hidden lg:flex text-xl font-bold'>Shared Room</h4>
                        <span className={`${!listStyle && `hidden` }`}>
                            <p className='hidden lg:flex font-md text-sm md:text-md lg:text-lg text-gray-500'>meals per day</p>
                            <p className='hidden lg:flex font-md text-sm md:text-md lg:text-lg text-gray-500'>Fast Internet</p>
                            <p className='hidden lg:flex font-md text-sm md:text-md lg:text-lg text-gray-500'>1x attach bathroom</p>
                        </span>
                        <div className='mt-2'>
                            <span className='text-sm lg:text-md py-2 px-3 mr-3 rounded-full border-[1px] border-purple-400 text-purple-400 hover:bg-purple-100 cursor-default transition-colors'>#Hot deals</span>
                            <span className='text-sm lg:text-md py-2 px-3 mr-3 rounded-full border-[1px] border-purple-400 text-purple-400 hover:bg-purple-100 cursor-default transition-colors'>#Popular</span>
                        </div>
                    </div >
                    <div className='min-w-fit flex flex-col justify-end items-end gap-4 mt-5'>
                        <p className='font-bold text-md lg:text-xl text-black'>Rs: {property.price} / month</p>
                        <button className='w-full border-[1px] rounded-full font-medium text-lg lg:text-xl text-white px-3 py-3 border-indigo-600 bg-indigo-500'><Link href={`/hostels/HostelDetail/`}>See Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelCard