import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../form-elements/button";
import Input from "../form-elements/input";
import Select from "react-select";
import { citiesData } from "@/utils/data";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postData, putData, updateData } from "@/utils/api";
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { propertyProps } from "@/types/types";



const UpdateTicket: React.FC<any> = ({ ticket, closeModal }) => {

    const user = useSelector(userData)
    const initialFormData = { ticketIssue: ticket.ticketIssue, status: ticket.status, }
    const [formData, setFormData] = useState<any>(initialFormData)
    const [statusList, setStatusList] = useState<any[]>([{ value: `open`, label: `open` }, { value: `draft`, label: `draft` }]);


    const handleChange = (e: ChangeEvent<any>) => {
        setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {

            let data = {
                ...formData,
                ticketId: ticket._id,
            }
            //Update Hostel Form

            let response = await toast.promise(putData(`hostel/updateTicketStatus`, data, `${user.access.token}`), {
                pending: `Updating...`,
                success: `Ticket updated`

            })

            if (response.message) {
                closeModal()
            }




        } catch (err) {
            console.error(err);
        }

    }

    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Add New Ticket</h1>
        </div>
        <div>
            <Input
                title="Hostel Name"
                name="hostelId"
                type="text"
                value={formData.hostelId}
                placeholder="Hostel Name"
                onChange={(e: ChangeEvent) => handleChange(e)}
                otherProps={{ required: true, disabled: true }}

            />
        </div>
        <div>
            <label htmlFor="status">Ticket Status:</label>
            <Select required={true}
                defaultValue={[{ value: `${formData.status}`, label: `${formData.status}` }]}
                name="status"
                id="status"
                options={statusList ?? []}
                className="basic-multi-select w-full z-[1] "
                classNamePrefix="select user"
                onChange={(e: any) => setFormData((prev: any) => ({ ...prev, status: `${e.value}` }))}
            />
        </div>
        <div className="grid grid-cols-1 min-w-[320px]">
            <label className="" htmlFor="desc">Description:</label>

            <textarea
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="description Eg: Room No 2 (Fan Not Working)"
                rows={3}
                name="ticketIssue"
                id="ticketIssue"
                value={formData.ticketIssue}
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

export default UpdateTicket;