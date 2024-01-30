import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AmenitiesInfo } from '@/utils/data'
import { propertyProps } from '@/types/types'
import { CiLocationOn } from 'react-icons/ci'

type HostelCardProps = {
    listStyle: boolean
    property: propertyProps
}





const HostelCard: React.FC<HostelCardProps> = ({ listStyle, property }) => {

    const { _id, thumbnail, title, rating, price,discountPrice ,slug, reviewCount, amentities,location } = property;

    const showAmenities = amentities && Object.keys(AmenitiesInfo).filter((key: string) => amentities && amentities[key] == true)

    return (
        <div key={slug} className={`${listStyle ? ` flex-col lg:flex-row ` : `flex-col `} relative card flex ml-auto mr-auto p-4 border-2 border-gray-100 shadow-xl rounded-xl`}>
            <div className=' hostel-image overflow-hidden max-w-[320px] h-auto min-h-[300px]'>

                <Image
                    width={300}
                    height={300}
                    className=' rounded-xl w-full h-full min-w-[300px] max-h-[300px]'
                    src={`${thumbnail}`}
                    alt={title}
                />
            </div>

            <div className={`${listStyle ? ` lg:p-4 ` : ``} py-2 flex-1 details w-full flex flex-col  justify-between `}>
                <div className={`${listStyle ? `flex-col lg:flex-row ` : ` flex-col `} w-full flex justify-between min-w-[320px]`}>
                    <div className='min-w-fit'>
                        <h2 className='text-2xl lg:text-3xl font-bold max-w-[300px]'>{title}</h2>
                        <p className='font-md text-sm md:text-md lg:text-lg text-gray-500 flex items-center'><CiLocationOn className="text-black" />{location}</p>
                        {listStyle && <p className='font-md text-sm md:text-md lg:text-lg text-white bg-white'>Free Cancellation . Breakfast Included</p>}
                    </div>
                    <div className={`${listStyle ? `lg:static ml-20` : ` `} absolute z-[0] top-8 right-6  flex items-center justify-end lg:mr-5 gap-2 `}>
                        <span className='text-right min-w-fit'>
                            {
                                <p className={`text-xl font-bold  ${rating < 4 ? `text-gray-400` : rating < 6.5 ? `text-yellow-600` : `text-green-600`} `}>{rating == 0 ? `New Hostel` : rating < 2 ? `Not Good` : rating < 4 ? `Normal` : rating < 6.5 ? `Good` : `Excellent`}</p>
                            }
                            <p className={`${listStyle ? `lg:text-gray-500 ` : `  `} text-white text-lg min-w-fit`}> {reviewCount > 0 ? reviewCount < 10 ? `0${reviewCount} reviews` : `${reviewCount} reviews` : `no reviews yet`} </p>

                            {/* {(reviewCount && reviewCount > 0) && <p className={`${listStyle ? `lg:text-gray-500 ` : `  `} text-white text-lg min-w-fit`}> {(reviewCount > 0 && reviewCount < 10) ? `0${reviewCount}` : reviewCount} reviews</p>} */}
                        </span>
                        {(rating >= 0) && <span className={` text-lg py-3 px-5 rounded-full border-[1px] ${rating < 4 ? `border-gray-400 text-gray-400 bg-gray-300` : rating < 6.5 ? `border-yellow-400 text-yellow-600 bg-yellow-300` : `border-green-400 text-green-600 bg-green-300`} `}>{Number(rating.toFixed(1))}</span>}
                    </div>
                </div>
                <div className={`${listStyle ? ` flex-col lg:flex-row ` : ` flex-col `} w-full flex  justify-between `}>
                    <div className='min-w-fit'>
                        {/* <h4 className='hidden lg:flex text-xl font-bold'>Shared Room</h4> */}
                        <ul className={`flex justify-start items-center pb-4`}>
                            {showAmenities && showAmenities?.slice(0,5).map((key:string, index:number) => <li key={key} title={`${AmenitiesInfo[key].text}`} className='text-2xl m-2 font-thin '>{AmenitiesInfo[key].icon}</li>)}
                            {(showAmenities && showAmenities.length > 5) && <li className='text-lg font-md' >+{showAmenities.length - 6}</li>}
                        </ul>
                        <div className='mt-2'>
                            <span className='text-sm lg:text-md py-2 px-3 mr-3 rounded-full border-[1px] border-purple-400 text-purple-400 hover:bg-purple-100 cursor-default transition-colors'>#New Launch</span>
                            <span className='text-sm lg:text-md py-2 px-3 mr-3 rounded-full border-[1px] border-purple-400 text-purple-400 hover:bg-purple-100 cursor-default transition-colors'>#Discounted</span>
                        </div>
                    </div >
                    <div className={`min-w-fit flex ${listStyle ? `flex-col`: ``}  justify-end items-end gap-4 mt-5 `}>
                        <p className='font-bold text-md lg:text-xl text-black flex items-end'>Rs: <span className='flex flex-col'><p className='font-extrabold text-2xl text-stone-700'>{discountPrice}</p><s className='font-thin text-red-400'>{ price }</s></span>  / month</p>
                        <Link href={{pathname:`/hostels/${slug}`}}><button className='w-full border-[1px] rounded-full font-medium text-lg  text-white px-6 py-3 border-indigo-600 bg-indigo-500'>See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelCard