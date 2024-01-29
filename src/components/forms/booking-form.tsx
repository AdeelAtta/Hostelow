
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FaCalendarAlt } from "react-icons/fa";

import Input from '../elements/Input'



interface BookingForm {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number | undefined,
}
const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
}
const BookingForm = (props: any) => {
    const [range, setRange] = useState<any>({ ...selectionRange })
    const [isRange, setIsRange] = useState(false)
    const handleDateRange = (e: any) => {
        setRange({ ...selectionRange, ...e.selection })
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='space-y-4'>
            <div className='flex justify-center items-center gap-4'>
                <Input type='text' name='firstName' handleChange={handleInputChange} placeHolder='First Name' value={props.formData.firstName} otherProps={{ required: true }}/>
                <Input type='text' name='lastName' handleChange={handleInputChange} placeHolder='Last Name' value={props.formData.lastName} otherProps={{ required: true }}/>
            </div>
            <Input type='email' name='email' handleChange={handleInputChange} placeHolder='Email' value={props.formData.email} otherProps={{ required: true }}/>
            <Input type='number' name='phoneNumber' handleChange={handleInputChange} placeHolder='Number' value={props.formData.phoneNumber} otherProps={{ required: true }} />

            <div className='flex-col sm:flex-row w-full flex items-center gap-3 relative '>
                <label htmlFor="startDate" className='w-full md:w-auto flex-1 lg:flex-1 flex flex-col lg:min-w-fit font-semibold'>Starting Date:
                    <span id='startDate' className='bg-white flex justify-end items-center gap-10 cursor-pointer shadow-lg border-2 rounded-md min-w-[200px] text-center py-2 px-4 font-semibold max-w-[300px]' onClick={() => setIsRange(true)}>
                        {range.startDate ? new Date(range.startDate).toLocaleString().slice(0, 9).replaceAll(`/`, `-`) : `Start Date`} <FaCalendarAlt />
                    </span>
                </label>
                <label htmlFor="endDate" className='w-full md:w-auto flex-1 lg:flex-1 flex flex-col lg:min-w-fit font-semibold min-w-fit'>End Date:
                    <span className='bg-white flex justify-end items-center gap-10 cursor-pointer shadow-lg border-2 rounded-md min-w-[200px] text-center py-2 px-4 font-semibold max-w-[300px]' onClick={() => setIsRange(true)}>
                        {range.endDate ? new Date(range.endDate).toLocaleString().slice(0, 9).replaceAll(`/`, `-`) : `End Date`} <FaCalendarAlt />
                    </span>
                </label>
                {isRange && <span className={` absolute top-20 right-0 z-[1]`} onMouseLeave={() => setIsRange(false)}><DateRangePicker
                    ranges={[range]}
                    onChange={handleDateRange}
                    minDate={new Date()}
                    direction='horizontal'
                    staticRanges={[]}
                    showPreview={false}
                />
                </span>
                }
            </div>
        </div>
    )
}

export default BookingForm
