import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import Input from '../elements/Input';
import Button from '../elements/Button';
import Checkbox from '../elements/Checkbox';
import { postData } from '@/utils/api';
import { toast } from 'react-toastify';

const initialForm = {
    firstName:``,
    lastName:``,
    email:``,
    password:``,
    phoneNumber: undefined,
    admin:true

}


const RegisterForm = () => {


    const [formData,setFormData] = useState<CreatePropertyOwnerAccountForm>(initialForm)
    const [confirmPassword,setConfirmPassword] = useState(``);


    const isPasswordMatch = useMemo(()=> formData.password == confirmPassword,[formData.password,confirmPassword])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
    }

    const handleNewAccountFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isFormFilled = Object.values(formData).every(value => value !== undefined && value !== null && value !== "")

        try{
            let response = await toast.promise(postData(`auth/register`,formData),{
                pending: 'Creating Account...',
            })
            console.log(response);

        }catch(err){
            console.error(err)
        }


    }

    return (
        <form onSubmit={(e)=>handleNewAccountFormSubmit(e)} className='flex flex-col gap-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
                <Input type='text' name='firstName' placeHolder="First Name" value={formData.firstName}
                    handleChange={handleInputChange} />
                <Input type='text' name='lastName' placeHolder="Last Name" value={formData.lastName}
                    handleChange={handleInputChange} />
            </div>
            <Input type='email' name='email' placeHolder="Email" value={formData.email}
                handleChange={handleInputChange} />
            <div className='flex flex-col md:flex-row gap-4'>
                <Input type='password' name='password' placeHolder="Password" value={formData.password}
                    handleChange={handleInputChange} />
                   
                <Input type='password' name='confirmPassword' placeHolder="Confirm Password" value={confirmPassword}
                    handleChange={(e:React.ChangeEvent<any>) => setConfirmPassword(e.target.value)} />
            </div>
            <Input type='number' name='phoneNumber' placeHolder="Phone number" value={formData.phoneNumber}
                handleChange={handleInputChange} />

            <Checkbox>
                <span className='text-sm'>I agree to the <strong>TERMS & CONDITIONS!</strong> and privacy policy!</span>
            </Checkbox>
            <Button text='Signup' type='submit'/>
        </form>
    )
}

export default RegisterForm




interface CreatePropertyOwnerAccountForm {

    firstName:string,
    lastName:string,
    email:string,
    password:string,
    phoneNumber:number | undefined,
    admin?:boolean


}

function PostData(arg0: string, formData: CreatePropertyOwnerAccountForm) {
    throw new Error('Function not implemented.');
}
