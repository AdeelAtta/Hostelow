import Button from "../form-elements/button";
import Input from "../form-elements/input";
import { FormEvent, useEffect, useState } from "react";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { postData } from "@/utils/api";
import { toast } from "react-toastify";
import { AmenitiesInfo } from "@/utils/data";



const initialRoomAmenities: any = {
    airCondition: false,
    furnishedRooms: false,
    keyAccess: false,
    studyArea: false,
    cleaningServices: false,
    privateBathroom: false,
    bed: false,
    mattress: false,
    lunch: false,
    dinner: false,
    breakfast: false,
    generator: false,
    ups: false,
    geyser: false,
}


interface AddUpdatePropertyAmenitiesProps {
    room: any
    closeModal: () => void
}

const AddUpdateRoomAmenities: React.FC<AddUpdatePropertyAmenitiesProps> = ({ room, closeModal }) => {

    const user = useSelector(userData);
    const initial = initialRoomAmenities
    const [amenitiesList, setAmenitiesList] = useState<any>(initial);


    const handleChange = (e: React.ChangeEvent<any>) => {
        setAmenitiesList((prev: any) => ({ ...prev, [e.target.name]: !amenitiesList[`${e.target.name}`] }))
    }


    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();
        let keysArray = Object.keys(amenitiesList);
        const data:string[] = []
        keysArray.forEach(key => {
            if(amenitiesList[key] == true){
                data.push(key)
            }
        })

        try {
            let response = await toast.promise(postData(`hostel/updateRoom`, { amenitities:data, roomId: `${room._id}` }, `${user.access.token}`), {

            })

            if (response.message) {
                closeModal()
            }

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (room && room.amenitities && room.amenitities.length > 0) {
            let amenits:any = initialRoomAmenities;
            Object.keys(amenits).forEach(key => { if (room.amenitities.includes(key)) { amenits[key] = true } })
            setAmenitiesList(amenits)
        }
    }, [room, room.amenitities])



    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center mb-5">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Add Room Amenities</h1>
        </div>
        <div className='flex flex-col gap-y-3 md:gap-y-4'>
            <ul className='grid grid-cols-1 gap-3 md:gap-4  sm:grid-cols-2'>


                {

                    Object.keys(amenitiesList).map((key: any, index) => {


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


export default AddUpdateRoomAmenities;