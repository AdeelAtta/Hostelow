import React, { useState } from 'react'
import Input from './form-elements/input'
import Button from '../elements/Button'
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';

const InvestForm = () => {

    const [formData,setFormData] = useState<any>({})

    const handleForm = (e:any) => {

        setFormData((prev:any) => ({...prev,[e.target.name]:e.target.value}))

    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        alert(`comming soon`)
        // toast.success(`Comming Soon`)


    }


    return (
        <>
            <ToastContainer className='absolute'  position="top-center" />
            <div className="w-full bg-white border-2 border-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6">
                    <form  onSubmit={handleSubmit}>
                        <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder='Name'
                                onChange={handleForm}
                            />
                            <Input
                                type="number"
                                name="number"
                                value={formData.number}
                                placeholder='phone Number'
                                onChange={handleForm}
                            />
                        </div>
                        <div>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder='Email'
                                onChange={handleForm}
                            />
                        </div>
                        <div className="ml-auto my-5">
                            <Select
                                name="hostel"
                                placeholder="Investment Potential"
                                id="hostel"
                                options={[{ key: `2500000`, label: `25 Lac` }, { key: `50000000`, label: `50 Lac` }, { key: `7500000`, label: `75 Lac` }]}
                                className="basic-multi-select min-w-[300px]"
                                classNamePrefix="select hostel"
                                onChange={handleForm}
                            />
                        </div>
                        <div className='mt-4'>
                            <Button text='Invest Now' type='submit' customeStyle='w-full' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InvestForm
