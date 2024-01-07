import { FaAddressCard, FaWifi } from "react-icons/fa6";
import Button from "./form-elements/button";
import Input from "./form-elements/input";
import { WiSandstorm } from "react-icons/wi";
import { LuParkingSquare } from "react-icons/lu";
import { useState } from "react";
import { validateHeaderValue } from "http";
import Checkbox from "../elements/Checkbox";

const AmenitiesInfo = {
    wifi: {
        icon: <FaWifi />,
        text: `Free wifi`,
    }, airCondition: {
        icon: <WiSandstorm />,
        text: `Air Conditioning`,
    }, bikeParking: {
        icon: <LuParkingSquare />,
        text: `Bike Parking`
    }, carParking: {
        icon: <LuParkingSquare />,
        text: `Car Parking`,
    }
}

const initialAmenities = {
    wifi: false,
    bikeParking: false,
    carParking: false,
    FurnishedRooms:false,
    cctv:false,
    CommonAreas:false,
    studyArea:false,
    laundry:false,
    CleaningServices:false,
    BathroomFacilities:false,
    internet:false,
    bed:false,
    mattress:false,
    lunch:false,
    dinner:false,
    breakfast:false,
    Generator:false,
    ups:false,
    geyser:false,
}

type properyProps = {
    title:string,
    desc:string,
    location:string,
    price:string,
    discountPrice:string
}

interface AddUpdatePropertyAmenitiesProps {
    property:properyProps
}

const AddUpdatePropertyAmenities:React.FC<AddUpdatePropertyAmenitiesProps> = ({property}) => {

    const [amenitiesList, setAmenitiesList] = useState<any>(initialAmenities)


    const handleChange = (e: React.ChangeEvent<any>) => {
        setAmenitiesList((prev: any) => ({ ...prev, [e.target.name]: !amenitiesList[`${e.target.name}`] }))
    }

    return <form onSubmit={() => { }} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Add Amenities</h1>
        </div>
        <div className='flex flex-col gap-y-3 md:gap-y-4'>
            <label>Property amenities</label>
            <ul className='grid grid-cols-1 gap-3 md:gap-4  sm:grid-cols-2'>
                <Input
                    type="checkbox"
                    name="wifi"
                    onChange={handleChange}
                    horizontal={true}
                    otherProps={{ checked: amenitiesList.wifi }}
                >
                    <li className='ml-3 inline-flex items-center gap-x-2'>
                        <i className='text-lg md:text-2xl'><FaWifi /></i>
                        <span className='text-base'>Free wifi</span>
                    </li>
                </Input>



                <li className='flex items-center gap-x-2'>
                    <i className='text-lg md:text-2xl'><WiSandstorm /></i>
                    <span className='text-base'>Air Conditioning</span>
                </li>
                <li className='flex items-center gap-x-4 '>
                    <i className='text-lg md:text-2xl'><LuParkingSquare /></i>
                    <span className='text-base'>Free Parking</span>
                </li>
                <li className='flex items-center gap-x-4 '>
                    <i className='text-lg md:text-2xl'><FaAddressCard /></i>
                    <span className='text-base'> Key Card Access</span>
                </li>
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