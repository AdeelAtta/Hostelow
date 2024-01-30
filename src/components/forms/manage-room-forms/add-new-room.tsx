import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../form-elements/button";
import Input from "../form-elements/input";
import Select from "react-select";
import { citiesData } from "@/utils/data";
import { toast } from "react-toastify";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { postData } from "@/utils/api";
import Hostels from "@/pages/hostels";

const types = [{ value: `Single`, label: `Single` },
{ value: `Double`, label: `Double` },
{ value: `Shared`, label: `Shared` },
]

const AddNewRoom: React.FC<any> = ({ closeModal, hostelList }) => {

    const user = useSelector(userData)
    const [formData, setFormData] = useState<any>({ hostelId: ``, type: ``, price: null,discountPrice:null, desc: ``, availability: null, occupancy: null })

    const handleChange = (e: ChangeEvent<any>) => {
        setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {




            const data = {
                ...formData,
            }

            if(formData.availability){
                data.availability = +formData.availability
            }
            if(formData.price){
                data.price = +formData.price
            }
            if(formData.discountPrice){
                data.discountPrice = +formData.discountPrice
            }
            if(formData.occupancy){
                data.occupancy = +formData.occupancy
            }
            

            let response = await toast.promise(postData(`hostel/addRooms`, data, `${user.access.token}`), {
                pending: `Creating...`,

            })


            if (response.message) {
                toast.success(response.message)
                closeModal();
            }


        } catch (err) {
            console.error(err);
        }

    }

    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="space-y-6 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Add New Room</h1>
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="hostel">Select Hostel:</label>
                <Select required={true}
                    defaultValue={[]}
                    name="hostelId"
                    placeholder="Select Hostel"
                    id="hostel"
                    options={hostelList ?? []}
                    className="basic-multi-select w-full z-[1] "
                    classNamePrefix="select hostel"
                    onChange={(e: any) => setFormData((prev: any) => ({ ...prev, hostelId: `${e.value}` }))}
                />
            </div>
            <div>
                <label htmlFor="hostel">Select Room Type:</label>
                <Select required={true}
                    defaultValue={[]}
                    name="hostelId"
                    id="hostel"
                    placeholder="Room type"
                    options={[...types] ?? []}
                    className="basic-multi-select w-full z-[1] "
                    classNamePrefix="select hostel"
                    onChange={(e: any) => setFormData((prev: any) => ({ ...prev, type: `${e.value}` }))}
                />
            </div>
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
            <Input
                title="Monthly Fee"
                name="price"
                type="number"
                value={formData.price}
                placeholder="Fee per Month eg 10000"
                onChange={(e: ChangeEvent) => handleChange(e)}
                otherProps={{ required: true }}

            />
            <Input
                title="Fee After Discount"
                name="discountPrice"
                type="number"
                value={formData.discountPrice}
                placeholder="Discounted Fee (if any)"
                onChange={(e: ChangeEvent) => handleChange(e)}

            />
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
            <Input
                title="Total Available Space"
                name="availability"
                type="number"
                value={formData.availability}
                placeholder="Total Space..."
                onChange={(e: ChangeEvent) => handleChange(e)}
                otherProps={{ required: true }}

            />
            <Input
                title="Occupied Space"
                name="occupancy"
                type="number"
                value={formData.occupancy}
                placeholder="Occupied Space..."
                onChange={(e: ChangeEvent) => handleChange(e)}
                otherProps={{ required: true }}

            />
        </div>
        <div className="grid grid-cols-1 min-w-[320px]">
            <label className="" htmlFor="desc">Description:</label>

            <textarea
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="description"
                rows={3}
                name="desc"
                id="description"
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

export default AddNewRoom;