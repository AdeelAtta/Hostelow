import React, { FormEvent, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdKeyOff } from "react-icons/md";

import Input from '../elements/Input';
import Button from '../elements/Button';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { postData } from '@/utils/api';
import { useDispatch } from 'react-redux';
import router from 'next/router';
import { setUserData } from '@/redux/slices/user-slice';
import Modal from '../common/modals/modal';
import ForgetPassword from './forget-password-form';

const initialForm = {
    email: ``,
    password: ``
}

const LoginForm = (props: any) => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState(initialForm);

    const [isModal,setIsModal] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFormSubmit = async (e:FormEvent) => {

        e.preventDefault()
        
        const isFormFilled = Object.keys(formData).every(field => field !== undefined && field !=="" && field !== null)
        
        if(isFormFilled){
            try{

                let response = await toast.promise(postData(`auth/login`,formData),{
                    pending:`Verifying...`,
                })
                router.push(`dashboard`)
                   dispatch(setUserData({
                    ...response
                   }))
                
            }catch(err){
                console.error(err);
            }
        }
    }

    return ( <>
        <form onSubmit={(e)=>handleFormSubmit(e)} className='flex flex-col gap-y-4'>
            <Input
                icon={<FaRegUser />}
                value={formData.email}
                type='email'
                name='email'
                placeHolder="Email"
                handleChange={handleInputChange}
                otherProps={{required:true}}
            />

            <Input
                icon={<MdKeyOff />}
                value={formData.password}
                type='password'
                name='password'
                placeHolder="Password"
                handleChange={handleInputChange}
                otherProps={{required:true}}
            />

            <Link onClick={()=>setIsModal(true)} className='text-right text-blue-400 font-thin text-md' href={""}>Forgot Password ?</Link>
            <Button text='Login' type='submit' />
        </form>
        <Modal title={''} isModal={isModal} closeModal={()=>setIsModal(false)} >
            <ForgetPassword closeModal={()=>setIsModal(false)} />
        </Modal>
       </>
    )
}

export default LoginForm


