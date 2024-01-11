import { FaAddressCard, FaWifi } from "react-icons/fa6";
import Button from "./form-elements/button";
import Input from "./form-elements/input";
import { WiSandstorm } from "react-icons/wi";
import { LuParkingSquare } from "react-icons/lu";
import { FormEvent, useState } from "react";
import { validateHeaderValue } from "http";
import Checkbox from "../elements/Checkbox";
import { FaHandsHelping, FaKey } from "react-icons/fa";
import { IoMdSnow } from "react-icons/io";
import { GiCctvCamera } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { postData } from "@/utils/api";
import { toast } from "react-toastify";


const AmenitiesInfo: any = {
    wifi: {
        icon: <FaWifi />,
        text: `Free wifi`,
        slug: `wifi`
    },
    airCondition: {
        icon: <WiSandstorm />,
        text: `Air Conditioning`,
        slug: `airCondition`
    },
    helpDesk: {
        icon: <WiSandstorm />,
        text: `Help Desk`,
        slug: `helpDesk`
    },
    bikeParking: {
        icon: <LuParkingSquare />,
        text: `Bike Parking`,
        slug: `bikeParking`
    },
    carParking: {
        icon: <LuParkingSquare />,
        text: `Car Parking`,
        slug: `carParking`
    },
    furnishedRooms: {
        icon: <LuParkingSquare />,
        text: `Furnished Rooms`,
        slug: `furnishedRooms`
    },
    cctv: {
        icon: <LuParkingSquare />,
        text: `CCTV`,
        slug: `cctv`
    },
    keyAccess: {
        icon: <LuParkingSquare />,
        text: `Key Access`,
        slug: `keyAccess`
    },
    commonAreas: {
        icon: <LuParkingSquare />,
        text: `Common Areas`,
        slug: `commonAreas`
    },
    studyArea: {
        icon: <LuParkingSquare />,
        text: `Study Area`,
        slug: `studyArea`
    },
    laundry: {
        icon: <LuParkingSquare />,
        text: `Laundry`,
        slug: `laundry`
    },
    cleaningServices: {
        icon: <LuParkingSquare />,
        text: `Cleaning Services`,
        slug: `cleaningServices`
    },
    privateBathroom: {
        icon: <LuParkingSquare />,
        text: `Private Bathroom`,
        slug: `privateBathroom`
    },
    internet: {
        icon: <LuParkingSquare />,
        text: `Internet`,
        slug: `internet`
    },
    bed: {
        icon: <LuParkingSquare />,
        text: `Bed`,
        slug: `bed`
    },
    mattress: {
        icon: <LuParkingSquare />,
        text: `Mattress`,
        slug: `mattress`
    },
    lunch: {
        icon: <LuParkingSquare />,
        text: `Lunch`,
        slug: `lunch`
    },
    dinner: {
        icon: <LuParkingSquare />,
        text: `Dinner`,
        slug: `dinner`
    },
    breakfast: {
        icon: <LuParkingSquare />,
        text: `Breakfast`,
        slug: `breakfast`
    },
    generator: {
        icon: <LuParkingSquare />,
        text: `Generator`,
        slug: `generator`
    },
    ups: {
        icon: <LuParkingSquare />,
        text: `UPS`,
        slug: `ups`
    },
    geyser: {
        icon: <LuParkingSquare />,
        text: `Geyser`,
        slug: `geyser`
    },

}

const initialAmenities = {
    wifi: false,
    bikeParking: false,
    helpDesk: false,
    airCondition: false,
    carParking: false,
    furnishedRooms: false,
    cctv: false,
    keyAccess: false,
    CommonAreas: false,
    studyArea: false,
    laundry: false,
    CleaningServices: false,
    privateBathroom: false,
    internet: false,
    bed: false,
    mattress: false,
    lunch: false,
    dinner: false,
    breakfast: false,
    Generator: false,
    ups: false,
    geyser: false,
}

type propertyProps = {
    userId: string
    _id: string,
    thumbnail: string
    title: string,
    desc: string,
    location: string,
    price: number,
    discountPrice: number
    amentities: null | any
    rating: number
    reviews: null | any
    rooms: null | any
    date: string
    isPublished: boolean

}

interface AddUpdatePropertyAmenitiesProps {
    property: propertyProps
    closeModal: () => void
}

const AddUpdatePropertyAmenities: React.FC<AddUpdatePropertyAmenitiesProps> = ({ property, closeModal }) => {

    const user = useSelector(userData);

    const initial = (property && property?.amentities) ? property.amentities : initialAmenities
    const [amenitiesList, setAmenitiesList] = useState<any>(initial);


    const handleChange = (e: React.ChangeEvent<any>) => {
        setAmenitiesList((prev: any) => ({ ...prev, [e.target.name]: !amenitiesList[`${e.target.name}`] }))
    }


    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        try {
            let response = await toast.promise(postData(`hostel/addAmenities`, { ...amenitiesList, hostelId: `${property._id}` }, `${user.access.token}`), {

            })

            if (response.message) {
                closeModal()
            }

        } catch (err) {
            console.error(err)
        }
    }





    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Add Amenities</h1>
        </div>
        <div className='flex flex-col gap-y-3 md:gap-y-4'>
            <label>Property amenities</label>
            <ul className='grid grid-cols-1 gap-3 md:gap-4  sm:grid-cols-2'>


                {
                    // AmenitiesInfo.every(amenity => {

                    //     return amenity
                    // } )

                    Object.keys(AmenitiesInfo).map((key: any, index) => {


                        const amenity = AmenitiesInfo[key];


                        return <><Input
                            type="checkbox"
                            name={key}
                            onChange={handleChange}
                            horizontal={true}
                            otherProps={{ checked: amenitiesList[key] }}
                        >
                            <li className='ml-3 inline-flex items-center gap-x-2'>
                                <i className='text-lg md:text-2xl'>{amenity.icon}</i>
                                <span className='text-base'> {amenity.text} </span>
                            </li>
                        </Input></>

                    })

                }

            </ul>
        </div>
        <div>
            <Button
                otherProps={{ style: { width: `100%`, marginTop: `20px` } }}
                type="submit"
            >Save</Button>
        </div>
    </form>

}


export default AddUpdatePropertyAmenities;