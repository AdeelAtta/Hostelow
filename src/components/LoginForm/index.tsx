import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdKeyOff } from "react-icons/md";
import Input from '../elements/Input';

const LoginForm = (props: any) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        //   })

    }
    return (
        <form className='flex flex-col gap-y-4'>
            <Input icon={<FaRegUser />} type='text' name='username' placeHolder="@Username" handleChange={handleInputChange} />
            <Input icon={<MdKeyOff />} type='password' name='password' placeHolder="Password"
                handleChange={handleInputChange} />
        </form>
    )
}

export default LoginForm
