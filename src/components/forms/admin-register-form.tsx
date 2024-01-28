import { useState } from 'react'
import { toast } from 'react-toastify';

import Input from './form-elements/input'
import Button from '../elements/Button'
import { postData } from '@/utils/api';
interface CreatePropertyOwnerAccountForm {

    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: number | undefined,
    // admin?: boolean
    role: string
}


const AdminRegisterForm = () => {

    const initialForm = {
        firstName: ``,
        lastName: ``,
        email: ``,
        password: ``,
        phoneNumber: undefined,
        role: `admin`
    }

    const [formData, setFormData] = useState<CreatePropertyOwnerAccountForm>(initialForm)
    const [confirmPassword, setConfirmPassword] = useState(``);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleNewAccountFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isFormFilled = Object.values(formData).every(value => value !== undefined && value !== null && value !== "")

        try {
            let response = await toast.promise(postData(`auth/register`, formData), {
                pending: 'Creating Account...',
            })
            setFormData(initialForm);
            setConfirmPassword(``)
            toast.success(`Account Created Successfully`)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6">
                <form onSubmit={(e) => handleNewAccountFormSubmit(e)}>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder='First Name'
                            onChange={handleInputChange}
                            otherProps={{ required: true }}
                        />
                        <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder='Last Name'
                            onChange={handleInputChange}
                            otherProps={{ required: true }}
                        />
                    </div>
                    <div>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder='Email'
                            onChange={handleInputChange}
                            otherProps={{ required: true }}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder='Password'
                            onChange={handleInputChange}
                            otherProps={{ required: true }}
                        />
                        <Input
                            type="password"
                            name="confirmpassword"
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={(e: React.ChangeEvent<any>) => setConfirmPassword(e.target.value)}
                            otherProps={{ required: true }}
                        />
                    </div>
                    <div>
                        <Input
                            type="number"
                            name="number"
                            value={formData.phoneNumber}
                            placeholder='Number'
                            onChange={handleInputChange}
                            otherProps={{ required: true }}
                        />
                    </div>
                    <div className='mt-4'>
                        <Button text='Sign Up' type='submit' customeStyle='w-full' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminRegisterForm
