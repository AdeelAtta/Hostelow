// import Input from "../elements/Input";
import Input from '@/components/forms/form-elements/input'
import Button from '@/components/elements/Button'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { userData } from '@/redux/slices/user-slice'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateData } from '@/utils/api'

const inititalForm = {
    firstName: ``,
    lastName: ``,
    email: ``,
    phoneNumber: ``
}


const ProfileSettings = () => {

    const user = useSelector(userData)

    const [formData, setFormData] = useState<any>(inititalForm)

    const handleChange = (e: ChangeEvent<any>) => {
        setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async(e:FormEvent) => {

        e.preventDefault()

        let data = {}

        const form =  Object.keys(formData).forEach((key:any)=> {
            if(formData[key] != user[key]){

                data = {...data,[key]:formData[key]};
            }
        })

        try{
            const response = toast.promise(updateData(`auth/updateAccount/${user._id}`,data,`${user.access.token}`),{
                pending:`Updating...`,
                success:`Account Updated Successful`
            })

        }catch(err){
            console.error(err);
        }
    }


    useEffect(() => {
        if (user) {
            const { firstName, lastName, email, phoneNumber } = user;
            setFormData({ firstName, lastName, email, phoneNumber })
        }

    },[])

    return <form onSubmit={(e)=>handleSubmit(e)} action="" className="mt-2 md:mt-10 space-y-4 w-fit ml-auto mr-auto ">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Edit Your Profile</h1>
        </div>
        <p className="max-w-xl text-lg text-center">
            Use the form Below to update your profile.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder='First Name'
                onChange={handleChange}
            />
            <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder='Last Name'
                onChange={handleChange}
            />
        </div>


        <Input
            type="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            otherProps={{ style: { marginBottom: `20px` } }}
        />

        <Input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder='Phone Number'
            onChange={handleChange}
            otherProps={{ style: { marginBottom: `10px` } }}
        />


        <div className="mt-4">
            <Button customeStyle='ml-auto mr-auto w-36 ' text="Save" type="submit" />
        </div>
    </form>



}

export default ProfileSettings;