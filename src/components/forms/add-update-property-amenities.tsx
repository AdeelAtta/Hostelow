import Button from "./form-elements/button";
import Input from "./form-elements/input";
import { FormEvent, useState } from "react";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { postData } from "@/utils/api";
import { toast } from "react-toastify";
import { AmenitiesInfo } from "@/utils/data";
import { propertyProps } from "@/types/types";



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