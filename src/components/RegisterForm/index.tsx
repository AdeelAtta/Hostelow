import React from 'react'
import Input from '../elements/Input';
const RegisterForm = () => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        //   })

    }
    return (
        <form className='flex flex-col gap-y-4'>
            <div className='flex'>
                <Input type='text' name='firstname' placeHolder="First Name"
                    handleChange={handleInputChange} />
                <Input type='text' name='lastname' placeHolder="Last Name"
                    handleChange={handleInputChange} />
            </div>
            <Input type='email' name='email' placeHolder="Email"
                handleChange={handleInputChange} />
            <div className='flex'>
                <Input type='password' name='password' placeHolder="Password"
                    handleChange={handleInputChange} />
                <Input type='password' name='confirmpassword' placeHolder="Confirm Password"
                    handleChange={handleInputChange} />
            </div>
            <Input type='number' name='number' placeHolder="Phone number"
                handleChange={handleInputChange} />
        </form>
    )
}

export default RegisterForm
