// import Input from "../elements/Input";
import Input from '@/components/forms/form-elements/input'
import Button from '@/components/elements/Button'
import { ChangeEvent, useState } from 'react'

const inititalForm ={
    firstName: ``,
    lastName:``,
    email:``,
    phoneNumber:``
}


const ProfileSettings = () => {

    const [formData,setFormData] = useState(inititalForm)

    const handleChange = (e:ChangeEvent<any>) => {
        setFormData((prev:any)=>({...prev,[e.target.name]:e.target.value}))
    }

    return <form action="" className="mt-2 md:mt-10 space-y-4 w-fit ml-auto mr-auto ">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Edit Your Profile</h1>
        </div>
        <p className="max-w-xl text-lg">
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
            otherProps={{style:{marginBottom:`20px`}}}
        />

        <Input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder='Phone Number'
            onChange={handleChange}
            otherProps={{style:{marginBottom:`10px`}}}
        />


        <div className="mt-4">
            <Button customeStyle='ml-auto mr-auto w-36 ' text="Save" type="submit" />
        </div>
    </form>



}

export default ProfileSettings;