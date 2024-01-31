import React, { useState } from 'react'
import Button from '@/components/elements/Button';
import { useRouter } from 'next/navigation';
import { getData } from '@/utils/api';
import { GetServerSideProps } from 'next/types';
import BookingForm from '@/components/forms/booking-form';
import Modal from '@/components/common/modals/modal';
import PaymentForm from '@/components/forms/payment-form';
import Policies from '@/components/sections/policies';


const initialForm = {
    firstName: ``,
    lastName: ``,
    email: ``,
    phoneNumber: undefined,
}
const RoomBooking: React.FC<any> = ({ roomData }) => {

    const [formData, setFormData] = useState<BookingForm>(initialForm)
    const [room, setRoom] = useState<any>(roomData);
    const [modal, setModal] = useState(false)
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setModal(true)
    }

    return (
        <section className='max-w-screen-xl mx-auto text-black py-4 px-4 xl:px-0 xl:py-8'>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-4' onSubmit={handleSubmit}>
                {/* Bookig Steps */}
                <div className=' flex-1 shadow-lg order-2 md:order-1'>
                    {/* step 1 */}
                    <div className='flex flex-col gap-y-3 md:gap-y-4 border-2 p-4 md:p-8 rounded-t-lg'>
                        <h2 className='font-bold'>Book {room.type} Room</h2>
                        <h3 className='font-bold'>Personal data</h3>
                        <BookingForm formData={formData} setFormData={setFormData} />
                        {/* <div className='flex flex-col gap-y-3 md:gap-y-4'>
                            <label>Property amenities</label>
                            <ul className='grid grid-cols-1 gap-3 md:gap-4  my-2'>
                                <li className='flex items-center gap-x-4'>
                                    <i className='text-lg md:text-2xl'><FaWifi /></i>
                                    <span className='text-base'>Free wifi</span>
                                </li>
                                <li className='flex items-center gap-x-2'>
                                    <i className='text-lg md:text-2xl'><WiSandstorm /></i>
                                    <span className='text-base'>Air Conditioning</span>
                                </li>
                                <li className='flex gap-x-4'>
                                    <i className='text-lg md:text-2xl'><LuParkingSquare /></i>
                                    <span className='text-base'>Free Parking</span>
                                </li>
                                <li className='flex gap-x-4'>
                                    <i className='text-lg md:text-2xl'><FaAddressCard /></i>
                                    <span className='text-base'> Key Card Access</span>
                                </li>
                            </ul>
                            <h3 className='font-bold'>Breakfast Included</h3>
                        </div>
                        <div className='relative'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Choose room options</label>
                            <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3 separate beds with 1 attached bathroom" required />
                        </div> */}
                    </div>
                    {/* step 2 */}
                    {/* <div className='flex flex-col gap-y-3 md:gap-y-4 border-2 border-y-0 p-4 md:p-8'>
                        <h3 className=' font-bold'>Step 2: Personal data</h3>
                        <div className='relative'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">First and Last name</label>
                            <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. Rashid  , Adeel ..." required />
                        </div>
                        <div className='relative'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email address</label>
                            <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="youremail@etc.com" required />
                        </div>
                        <div className='relative'>
                            <label htmlFor="number" className="block mb-2 text-sm font-medium ">Phone number</label>
                            <input type="number" id="number" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+92-0123456789" required />
                        </div>
                    </div> */}
                    {/* step 3 */}
                    {/* <div className='flex flex-col gap-y-3 md:gap-y-4 border-2 border-y-0 p-4 md:p-8'>
                        <h3 className='font-bold'>Step 3: Payment details</h3>
                        <div className='relative'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Name on card</label>
                            <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. Rashid , Adeel ..." required />
                        </div>
                        <div className='relative'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Card number</label>
                            <input type="password" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="** ** ** **" required />
                        </div>
                        <div className='relative flex flex-col md:flex-row gap-3'>
                            <div className='flex-1'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Valid Until</label>
                                <input type="date" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm/yy" required />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">CVC</label>
                                <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*" required />
                            </div>
                        </div>
                    </div> */}
                    {/* step 4 */}
                    <Policies />
                </div>

                {/* Hostel Detail */}
                <div className='flex-1 border-2 shadow-lg rounded-lg p-4 flex flex-col order-1 md:order-2'>
                    <img className='rounded-lg' src={room?.images[0] ? room?.images[0] : `/assets/hostel_large.png`} alt="" />
                    <div className='flex flex-col gap-y-2 md:gap-y-3 py-4 border-b-2'>
                        <h2 className='leading-none text-md md:text-xl font-bold'>Room Type {room?.type}</h2>
                        <p className='text-[#7D7D7D] text-sm'>4-star hostel room located at jamshoro near Sindh University</p>
                        <div className='flex flex-col gap-y-2 lg:gap-y-3'>
                            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                                <div className='...'>
                                    <span>Total Price</span>
                                </div>
                                <div className='lg:col-span-3 text-[#7D7D7D]'><span className='text-base'>RS</span> {room?.price} </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                                <div>
                                    <span>Total Beds </span>
                                </div>
                                <div className='lg:col-span-3 text-[#7D7D7D]'>{room?.beds}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 md:gap-y-3'>
                        <h2 className='leading-none text-md md:text-xl font-bold'>Room Space</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className='...'>
                                <span >Availability</span>
                            </div>
                            <div className='lg:col-span-3 text-[#7D7D7D]'>{room?.availability}</div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <span>Occupancy</span>
                            </div>
                            <div className='lg:col-span-3 text-[#7D7D7D]'>{room?.occupancy}</div>
                        </div>
                    </div>
                    {/* <div className='flex flex-col  py-4 border-b-2'>
                        <h2 className='leading-none text-md md:text-xl font-bold'>Amenities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:mt-4">
                            {
                                room?.amenitities.map((item: string) => {
                                    return (
                                        <div className=' text-[#7D7D7D]'>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div> */}
                    <Button text='Book Now' type='submit' customeStyle=' mt-10' />
                    <Modal title='' isModal={modal} closeModal={() => setModal(false)} >
                    <PaymentForm data={formData} roomData={roomData} />
                    </Modal>
                </div>
            </form>
        </section>
    )
}

export default RoomBooking


export const getServerSideProps: GetServerSideProps<any> = async ({ params }) => {
    const roomSlug = params?.roomSlug as string;

    const parts = roomSlug.split(`+`);


    try {
        const slug = parts[1]
        if (parts.length < 2) {
            return {
                notFound: true,
            };
        }
        const response = await getData(`hostel/rooms/${slug}`);
        const roomData = response.rooms[0];
        console.log(roomData)
        return {
            props: {
                roomData: roomData
            },
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true,
        };
    }
};