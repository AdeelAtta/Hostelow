import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdKeyOff } from "react-icons/md";

import Input from '../elements/Input';
import Button from '../elements/Button';
import Link from 'next/link';

const LoginForm = (props: any) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    }

    return (
        <form className='flex flex-col gap-y-4'>
            <Input icon={<FaRegUser />} type='text' name='username' placeHolder="@Username" handleChange={handleInputChange} />
            <Input icon={<MdKeyOff />} type='password' name='password' placeHolder="Password"
                handleChange={handleInputChange} />
            <Link className='text-center text-blue-500' href={""}>Forgot Password?</Link>
            <Button text='Login' type='submit' />
        </form>
    )
}

export default LoginForm
