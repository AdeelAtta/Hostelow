import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "./form-elements/button";
import Input from "./form-elements/input";
import Select from "react-select";
import { citiesData } from "@/utils/menuData";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postData } from "@/utils/api";

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

interface UpdatePropertyDataProps {
    property:propertyProps,
    closeModal:()=>void
}

const UpdatePropertyData:React.FC<UpdatePropertyDataProps> = ({property,closeModal}) => {

    const user = useSelector(userData)
    const initialFormData = { title: property.title, desc: property.desc, location: property.location, price: property.price, discountPrice: property.discountPrice }
    const [formData, setFormData] = useState<any>(initialFormData)
    const [citiesList, setCitiesList] = useState<any[]>([]);
    const handleChange = (e: ChangeEvent<any>) => {
        setFormData((prev: any) => ({ ...prev, [e.target.name]: `${e.target.value}` }))
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {

            //Update Hostel Form

            let response = await toast.promise(postData(`hostel/createhostel`, formData, `${user.access.token}`), {
                pending: `Creating...`,
                success: `New Hostel updated`

            })

            if(response.message){
                closeModal()
            }




        } catch (err) {
            console.error(err);
        }

    }

    useEffect(() => {

        const list = citiesData.map((city: any) => ({ value: `${city.name}`, label: `${city.name}` }))
        setCitiesList(list);

    }, [])


    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Update Hostel Info</h1>
        </div>
        <div>
            <Input
                title="Hostel Name"
                name="title"
                type="text"
                value={formData.title}
                placeholder="Hostel Name"
                onChange={(e: ChangeEvent) => handleChange(e)}
                otherProps={{ required: true }}

            />
        </div>
        <div>
            <label htmlFor="location">Location:</label>
            <Select required={true}
                defaultValue={[{id:formData.location,label:formData.location}]}
                name="location"
                id="location"
                options={citiesList ?? []}
                className="basic-multi-select w-full z-[1] "
                classNamePrefix="select user"
                onChange={(e: any) => setFormData((prev: any) => ({ ...prev, location: `${e.value}` }))}
            />
        </div>

        <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
            <Input
                title="Fee per Month / person"
                name="price"
                type="number"
                value={formData.price}
                placeholder="Fee per Month / person eg 10000"
                onChange={(e: ChangeEvent) => handleChange(e)}
                otherProps={{ required: true }}

            />
            <Input
                title="Fee After Discount (if any)"
                name="discountPrice"
                type="number"
                value={formData.discountPrice}
                placeholder="Discounted Fee (if any)"
                onChange={(e: ChangeEvent) => handleChange(e)}

            />
        </div>
        <div className="grid grid-cols-1 min-w-[320px]">
            <label className="" htmlFor="desc">Description:</label>

            <textarea
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="description"
                rows={3}
                name="desc"
                id="desc"
                value={formData.desc}
                onChange={(e: ChangeEvent) => handleChange(e)}
            ></textarea>
        </div>
        <div>
            <Button
                otherProps={{ style: { width: `100%`, marginTop: `20px` } }}
                type="submit"
            >Save</Button>
        </div>
    </form>

}

export default UpdatePropertyData;