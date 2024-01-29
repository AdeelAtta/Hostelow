import React, { useState, useRef, useEffect } from 'react';
import { FaRegUser, FaWifi } from "react-icons/fa";
import { WiSandstorm } from "react-icons/wi";
import { FaShower } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { GrDirections } from "react-icons/gr";
import { IoIosStopwatch } from "react-icons/io";
import Button from '@/components/elements/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getData } from '@/utils/api';
import { AmenitiesInfo } from '@/utils/data';
import { GetServerSideProps } from 'next/types';
import { propertyProps } from '@/types/types';



type HostelDetailProps = {
  hostelData: propertyProps
}

const HostelDetail: React.FC<HostelDetailProps> = ({ hostelData }) => {

  const router = useRouter();
  // const { hostelSlug } = router.query;
  const [propertyData, setPropertyData] = useState<any>({});
  const [gallery, setGallery] = useState<any>({ img0: ``, img1: ``, img2: ``, img3: ``, img4: `` })
  const [reviews, setReviews] = useState<any>({})
  const [amenities, setAmenities] = useState<any>([])
  const [rooms, setRooms] = useState<any>([])

  useEffect(() => {

    console.log(hostelData);
    const getHostelBySlug = async () => {
      try {
        // let response = await getData(`hostel/getHostels?slug=${hostelSlug}`);
        if (hostelData && hostelData != null) {
          setPropertyData(hostelData)
          if (hostelData.gallery) {
            setGallery(hostelData.gallery)
          }
          if (hostelData.reviews) {
            const entries = Object.entries(hostelData.reviews);
            setReviews(entries)
          }
          if (hostelData.amentities) {
            const entries = Object.entries(hostelData.amentities);
            const filteredAmenities = entries.filter(([key, value]) => value === true);
            setAmenities(filteredAmenities.map(arr => arr[0]))
          }
          if (hostelData.rooms) {
            setRooms(hostelData.rooms)
          }


        }
      } catch (err) {
        console.error(err)
      }
    }

    getHostelBySlug();

  }, [hostelData])

  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      title: 'Amenities',
      content: (
        <>
          {/* <h3 className='text-lg text-black font-bold leading-normal'>Facilities Provided by Hostel</h3> */}
          <ul className='max-w-2xl mt-4 grid grid-cols-4 gap-2'>
            {
              amenities && amenities.map((amenity: string, index: number) => {
                const field = AmenitiesInfo[amenity]
                return <>
                  <li key={index} className='w-full flex gap-2 md:gap-6 items-center text-black'>
                    <i>{field.icon}</i>
                    <h5 className='text-sm'>{field.text}</h5>
                  </li>
                </>
              })
            }
          </ul>
        </>
      ),
    },
    {
      title: 'Description',
      content: (
        <h3 className='text-lg text-black font-bold leading-normal'>{propertyData.desc}</h3>
      ),
    },
    {
      title: 'Policies',
      content: (
        <h3 className='text-lg text-black font-bold leading-normal'>Policies</h3>
      ),
    },
    // {
    //   title: 'Policies',
    //   content: (
    //     <h3 className='text-lg text-black font-bold leading-normal'>Policies</h3>
    //   ),
    // },
  ];


  return (
    <main className='max-w-screen-xl mx-auto p-4 '>
      <section className='max-w-screen-xl mx-auto xl:p-0 xl:py-6'>
        {/* Hostel Gallery */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-lg">
            <img src={gallery.img0 ? gallery.img0 : `/assets/hostel_large.png`} alt={propertyData.title} className='w-full h-full rounded-lg' />
          </div>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
            <img src={gallery.img1 ? gallery.img1 : "/assets/hostel_large.png"} alt={propertyData.title} className='w-full h-full rounded-lg' />
            <img src={gallery.img2 ? gallery.img2 : "/assets/hostel_small.png"} alt={propertyData.title} className='w-full h-full rounded-lg' />
            <img src={gallery.img3 ? gallery.img3 : "/assets/hostel_small.png"} alt={propertyData.title} className='w-full h-full rounded-lg' />
            <img src={gallery.img4 ? gallery.img4 : "/assets/hostel_large.png"} alt={propertyData.title} className='w-full h-full rounded-lg' />
          </div>
        </div>
        {/* Tabs Section */}
        <div className='relative my-4'>
          <h3 className='text-black text-2xl font-bold'>{propertyData.title + `(${propertyData.location})`}</h3>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full flex flex-col gap-y-2'>
              <div className='grid grid-cols-2 gap-x-4 md:grid-cols-4 md:flex lg:gap-x-4 font-bold text-black'>
                {items.map((item, index) => (
                  <button
                    ref={index === 0 ? firstBtnRef : null}
                    key={index + item.title}
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
          <div className='grid grid-cols-6  lg:gap-8 p-4'>

            <div className='col-span-4 flex flex-col gap-6'>
              {/* CARD */}
              {
                rooms && rooms.length > 0 && rooms.map((room: any) => {

                  const { _id, images, availability, occupancy, price, amenitities, discountPrice } = room
                  return <>
                    <div key={_id} className="flex rounded-lg p-4 shadow-lg shadow-gray-200 bg-white gap-5">
                      <img
                        alt="Home"
                        src={(images && images.length > 0) ? images[0] : `/assets/hostel_large.png`}
                        className=" w-[30%] rounded-md object-cover"
                      />
                      <div className='w-[70%]'>
                        <div className="w-full flex items-center justify-between">
                          <h3 className='text-2xl font-bold'>{availability > 2 ? `${availability} Bed, Mixed room` : availability == 2 ? `Double Bed Room` : availability == 1 && `Single Bed Room`} </h3>
                          <h4 className='text-2xl font-extrabold flex flex-col items-center '>{(discountPrice && (discountPrice > 0)) ? <span><s className='text-base text-red-400'>PKR {price}</s><b className='font-bold'> PKR {discountPrice}</b></span> : price} <span className='font-thin text-sm ml-auto'>per month</span>  </h4>
                        </div>
                        <h4 className='flex items-center justify-start my-1'><FaRegUser className="mr-2" /> x 1</h4>
                        <h3 className='text-lg font-medium text-gray-400'>{availability > 2 ? `${availability} Bed, Mixed room` : availability == 2 ? `Double Bed Room` : availability == 1 && `Single Bed Room`} </h3>
                        <div className='w-full flex items-center justify-between border-b-[1px] border-gray-200'>
                          <ul className={`flex justify-start items-center pb-4`}>
                            {amenitities && amenitities?.slice(0, 5).map((key: string, index: number) => <li key={key} title={`${AmenitiesInfo[key]?.text}`} className='text-2xl m-2 font-thin '>{AmenitiesInfo[key]?.icon}</li>)}
                            {(amenitities && amenitities?.length > 5) && <li className='text-lg font-md' >+{amenitities.length - 5}</li>}
                          </ul>
                          {availability > occupancy && <span className='font-md text-xl text-green-600'>{availability - occupancy } {(availability - occupancy) > 1 ? `beds`:`bed`} Available</span>}
                        </div>
                        {/* <div className="mt-2 grid grid-cols-3 py-3 border-l-2 border-r-2">
                          <div className='flex flex-col items-center justify-center px-2'>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>{availability}</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Total Space</p>
                          </div>
                          <div className='flex flex-col items-center justify-center px-2 border-l-2 border-r-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>{occupancy}</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Occupied</p>
                          </div>
                          <div className='flex flex-col items-center justify-center px-2 '>
                            <h4 className='text-[#7D7D7D] text-base font-bold'>{availability - occupancy}</h4>
                            <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Remaining</p>
                          </div>
                        </div> */}
                        <div className='flex items-center justify-end mt-2'>
                          {availability > occupancy ?
                            <Link className=' ml-auto rounded-3xl ' href={`/hostels/${hostelData?.slug}/${hostelData?.slug + `+` + _id}`}>
                              <Button text='Book Space' type='button' customeStyle='ml-auto' />
                            </Link>
                            : <span className='text-lg font-bold ml-auto text-red-500'>SOLD OUT</span>}
                        </div>
                      </div>
                    </div>
                  </>

                  // return <>
                  // <div className="block rounded-lg px-4 py-2 shadow-lg shadow-indigo-100 bg-white ">
                  //   <img
                  //     alt="Home"
                  //     src={room?.images[0]}
                  //     className="h-48 w-full rounded-md object-cover"
                  //   />
                  //     <h3 className='text-2xl font-bold'>{room.type} room</h3>
                  //   <div className="mt-2 grid grid-cols-3 py-3 border-l-2 border-r-2">
                  //     <div className='flex flex-col items-center justify-center px-2'>
                  //     <h4 className='text-[#7D7D7D] text-base font-bold'>{room.availability}</h4>
                  //     <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Total Space</p>
                  //     </div>
                  //     <div className='flex flex-col items-center justify-center px-2 border-l-2 border-r-2 '>
                  //     <h4 className='text-[#7D7D7D] text-base font-bold'>{room.occupancy}</h4>
                  //     <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Occupied</p>
                  //     </div>
                  //     <div className='flex flex-col items-center justify-center px-2 '>
                  //     <h4 className='text-[#7D7D7D] text-base font-bold'>{room.availability - room.occupancy}</h4>
                  //     <p className='text-[#7D7D7D] text-sm min-w-fit whitespace-nowrap text-center'>Remaining</p>
                  //     </div>
                  //   </div>
                  //     <Link href={`/hostels/${hostelData?.slug}/${hostelData?.slug+`@`+room?._id}`}>
                  //       <Button text='Book Now!' type='button' customeStyle='w-full my-4' />
                  //     </Link>
                  // </div>
                  // </>

                })

              }

            </div>

            {/* <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100 bg-white">
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
                <Link href={'/hostels/HostelBooking'}>
                  <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
                </Link>
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
                <Link href={'/hostels/HostelBooking'}>
                  <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
                </Link>
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
                <Link href={'/hostels/HostelBooking'}>
                  <Button text='Book Now!' type='button' customeStyle='w-full mt-4' />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>



      {/* REVIEWS */}
      <section className='max-w-screen-xl mx-auto p-4'>
        <div className=' xl:p-0 xl:py-6'>
          <h3 className='text-black text-2xl font-bold mb-4'>Reviews</h3>
          <div className='relative grid grid-cols-3 gap-5'>


            {
              reviews && reviews.length > 0 && reviews.map((review: any, index: number) => {
                const amentity = AmenitiesInfo[review[0]]
                return <>
                  <div key={review[0]} className='flex flex-col gap-4 mt-4'>
                    <label htmlFor="file" className='text-[#7D7D7D] text-xl font-md flex items-center gap-2'>{amentity.icon}{amentity.text}</label>
                    <progress id="file" value={`${review[1]}`} max="10"
                      className={`w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 ${review[1] < 3.3 ? `[&::-webkit-progress-value]:bg-red-500` : review[1] < 6.6 ? `[&::-webkit-progress-value]:bg-yellow-500` : `[&::-webkit-progress-value]:bg-green-500`}  [&::-moz-progress-bar]:bg-violet-400 `}> {review[1] * 10}% </progress>
                  </div>
                </>

              })
            }
            {/* <div className='flex flex-col gap-4 mt-4'>
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
            </div> */}
          </div>
        </div>
      </section>

    </main>
  )
}

export default HostelDetail


export const getServerSideProps: GetServerSideProps<any> = async ({ params }) => {
  const hostelSlug = params?.hostelSlug as string;

  try {
    const response = await getData(`hostel/getHostels?slug=${hostelSlug}`);
    const hostelData: propertyProps = response.hostels[0] || {};

    if(hostelData && Object.keys(hostelData).length < 1){
      return {
        notFound: true,
      };
    }

    return {
      props: {
        hostelData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
