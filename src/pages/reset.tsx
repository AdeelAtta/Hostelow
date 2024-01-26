import { FaRegUser } from "react-icons/fa6";
import Input from "@/components/forms/form-elements/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { userData, verifyUser } from "@/redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/elements/Button";
import { ToastContainer, toast } from "react-toastify";
import { postData } from "@/utils/api";
import { GetServerSideProps } from "next/types";

interface ResetProps {
    resetHash:string
}

const initialForm = {password:``,confirmPassword:``}
const Reset: React.FC<ResetProps> = ({ resetHash }) => {

    const [data,setData] = useState(initialForm);
    const [isChanged,setIsChanged] = useState(false);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        setData(prev => ({...prev,[e.target.name]:`${e.target.value}`}))
        
    }


    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if(data.password.length <= 7){
            toast.error(`Password must be 8 characters or long`)
            return
        } 
        if(data.password !== data.confirmPassword){
            toast.warn(`Password must be 8 characters or long`)
            return
        }

        try {
            let response = await toast.promise(postData(`auth/resetPassword`, { password:data.password,hash: resetHash}), {
                pending: `Password updating...`,
            })
            if(!!response.message){
                toast.success(response.message)
                setData(initialForm)
                setIsChanged(true)

            }
        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <ToastContainer position="top-center" />
        <div className="w-full flex flex-col justify-center items-center ">
        <form onSubmit={(e: FormEvent) => handleFormSubmit(e)} className='my-5 flex flex-col gap-y-4 max-w-[400px] border-2 border-gray-200 bg-gray-50 rounded-xl p-6 ml-auto mr-auto mt-10'>

      

          

           {!isChanged ?  <>

            <div className="mx-auto max-w-lg text-left">
                <h1 className="text-lg font-bold sm:text-2xl text-blue-400 dark:text-gray-300 "> Reset Form </h1>
            </div>

            <p className="max-w-xl text-md text-center  text-gray-400">
                <b>Resetting password for hash:</b> {resetHash.slice(0,25)}...
                <br />
            </p>
           
            <p className="max-w-xl text-md text-left  text-yellow-400">
                Password should be 8 characters or long 
                <br />
            </p>
            <Input
                title="Password"
                type={"password"}
                name={"password"}
                value={`${data.password}`}
                placeholder="Enter Password"
                onChange={handleChange}
            />
            <Input
                title="Confirm Password"
                type={"password"}
                name={"confirmPassword"}
                value={`${data.confirmPassword}`}
                placeholder="Enter Confirm Password"
                onChange={handleChange}
            />
            <p className="max-w-xl text-sm text-center my-1 text-gray-500 ">

               

            </p>
            <Button text="Reset Password" type="submit" customeStyle={`font-semibold text-md rounded-lg`} />

           
           
           
           </> : 
           
           <>
           <p className="max-w-xl text-2xl text-left  text-green-400">
                Password Changed Successfull
                <br />
            </p>
            <Button handleClick={()=>{}} text="Back to Login" type="button" customeStyle={`hover:bg-transparent hover:text-blue-600 font-semibold text-md ml-auto mr-auto max-w-fit bg-transparent text-blue-800`} />
           </>
            
            } 

        </form>

        </div>
    </>

}

export default Reset;

export const getServerSideProps: GetServerSideProps<any> = async (context) => {

    const { query } = context;

    const hash = query.hash;
    // const resetHash = params?.hash as string;

    try {
        const response = await postData(`auth/checkHash`, { hash: `${hash}` });

        const newHash = response?.message
        //   const hostelData: propertyProps= response.hostels[0] || {};

        return {
            props: {
                resetHash: newHash || null,
            },
        };

    } catch (error) {
        return {
            notFound: true,
        };
    }
};

