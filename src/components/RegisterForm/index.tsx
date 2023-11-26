import React from 'react'
import Input from '../elements/Input';
import Button from '../elements/Button';
import Checkbox from '../elements/Checkbox';
const RegisterForm = () => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        //   })

    }
    return (
        <form className='flex flex-col gap-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
                <Input type='text' name='firstname' placeHolder="First Name"
                    handleChange={handleInputChange} />
                <Input type='text' name='lastname' placeHolder="Last Name"
                    handleChange={handleInputChange} />
            </div>
            <Input type='email' name='email' placeHolder="Email"
                handleChange={handleInputChange} />
            <div className='flex flex-col md:flex-row gap-4'>
                <Input type='password' name='password' placeHolder="Password"
                    handleChange={handleInputChange} />
                <Input type='password' name='confirmpassword' placeHolder="Confirm Password"
                    handleChange={handleInputChange} />
            </div>
            <Input type='number' name='number' placeHolder="Phone number"
                handleChange={handleInputChange} />

            <Checkbox>
                <span className='text-sm'>I agree to the <strong>TERMS & CONDITIONS!</strong> and privacy policy!</span>
            </Checkbox>

            <Button text='Signup' type='submit'/>

        </form>
    )
}

export default RegisterForm
