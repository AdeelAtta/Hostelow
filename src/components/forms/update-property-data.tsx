import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "./form-elements/button";
import Input from "./form-elements/input";
import Select from "react-select";
import { citiesData } from "@/utils/data";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postData } from "@/utils/api";
import Image from 'next/image'
import { IoClose } from "react-icons/io5";

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
    const initialFormData = { title: property.title, desc: property.desc, location: property.location, price: property.price, discountPrice: property.discountPrice,isPublished: property.isPublished }
    const [formData, setFormData] = useState<any>(initialFormData)
    const [thumbnail,setThumbnail] = useState(`${property.thumbnail}`)
    const [citiesList, setCitiesList] = useState<any[]>([]);



    const handleChange = (e: ChangeEvent<any>) => {
        if(e.target.name == `isPublished`){
            setFormData((prev: any) => ({ ...prev, [e.target.name]: !formData.isPublished }))
        }else{
            setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }

    const handleFileChange = (e: ChangeEvent<any>) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        if (file) {
            reader.onloadend = function () {
                setThumbnail(`${reader.result}`)
            }
            reader?.readAsDataURL(file);
        }
    }

    const handleReset = (key: string) => {
        setThumbnail(``)
    }



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {

            let data = {
                ...formData,
                hostelId:property._id,
                thumbnail:thumbnail
            }
            //Update Hostel Form

            let response = await toast.promise(postData(`hostel/updateHostel`, data, `${user.access.token}`), {
                pending: `Creating...`,
                success: `New Hostel updated`

            })

            if(response._id){
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
        <div className=' hostel-image overflow-hidden max-w-[320px] h-auto '>
            <label htmlFor="">Thumbnail :</label>
            <div className="relative rounded-lg flex border-[1px] border-gray-300 hover:opacity-60 cursor-pointer">
                {(thumbnail.length>0) && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`thumbnail`)} />}
                <img src={thumbnail} alt={formData.name} className='w-full min-h-[200px]' />
                <input
                    className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                    type="file"
                    name="img0"
                    onChange={handleFileChange}
                />
            </div>
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
            <Input
                
                type="checkbox"
                name={`isPublished`}
                onChange={handleChange}
                horizontal={true}
                otherProps={{ checked: formData.isPublished }}
                >
                <li className='mt-3 ml-2 inline-flex items-center gap-x-2'>
                    <span className='text-base'> Publish? </span>
                </li>
            </Input>
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