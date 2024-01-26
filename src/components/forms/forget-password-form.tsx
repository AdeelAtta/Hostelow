import { FaRegUser } from "react-icons/fa6";
import Input from "./form-elements/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { userData, verifyUser } from "@/redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../elements/Button";
import { ToastContainer, toast } from "react-toastify";
import { postData } from "@/utils/api";

type VerifyEmailProps = {
    closeModal:()=>void
}

const ForgetPassword:React.FC<VerifyEmailProps> = ({closeModal}) => {



    const [email,setEmail] = useState<any>("")
    const [isEmailSend,setIsEmailSend] = useState(false)
    const [disable,setDisable] = useState(false)
    // const [OTP,setOTP] = useState<any>(null);


    // const verifyOTP = async(e:React.MouseEvent<HTMLButtonElement>) => {


    //     if(OTP.length != 6){
    //         toast.error(`Incorrect OTP Code`)
    //         return 
    //     }
    //     try{
    //         let response = await toast.promise(postData(`auth/verifyOTP`, { userId: user._id, otp: `${OTP}` }, `${user.access.token}`), {
    //             pending: `Verifying...`,
    //             success: `Email Verified`
    //         })
    //         if(response.message){
    //             dispatch(verifyUser())
    //             setTimeout(() => {
    //                 closeModal()
    //               }, 2000);
    //         }            
            
    //     }catch(err){
    //         console.error(err)
    //     }

    // }


    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            let response = await toast.promise(postData(`auth/forgetPassword`, { email:email }), {
                pending: `Sending Reset link`,
                success: `Reset Link send`
            })
            if(!!response){

                // setEmail(``)
                setIsEmailSend(true)

            }
        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <ToastContainer position="top-center" />
        <form onSubmit={(e: FormEvent) => handleFormSubmit(e)} className='flex flex-col gap-y-4'>
             
            <div className="mx-auto max-w-lg text-left">
                <h1 className="text-lg font-bold sm:text-2xl text-blue-400 dark:text-gray-300 ">! Reset your Password </h1>
            </div>
           {!isEmailSend ? <>
            <p className="max-w-xl text-md text-center  ">
               Please provide the email address that you used when you signed up for your account.
               <br/>
            </p>
            <Input
            title="Enter your Email" 
            type={"email"} 
            name={"email"} 
            value={`${email}`}
            placeholder="Email Address"
            onChange={(e:React.ChangeEvent<any>)=>setEmail(`${e.target.value}`)}

            />
              <p className="max-w-xl text-sm text-center my-2 text-gray-500 ">
              
            *We will send you an email that will allow you to reset your password.
              
            </p>
            <Button text="Request reset link" type="submit" customeStyle={`font-semibold text-md rounded-lg`} />

            </>
            :
            <>
            <p className="max-w-xl text-md text-center  ">
                 Password Reset Link Send successfully at
            </p>
            <span className=" font-bold border-2 px-2 py-1 bg-gray-200 rounded-md max-w-fit ml-auto mr-auto">{email}</span>
            </>
           }

        </form>
        {isEmailSend && <Button handleClick={()=>{setEmail(``);setIsEmailSend(false)}} text="Send Again" type="button" customeStyle={`font-semibold text-md rounded-lg hover:bg-green-500 bg-green-600 ml-auto mr-auto mt-10`} />}
        <Button handleClick={()=>closeModal()} text="Back to Login" type="button" customeStyle={`hover:bg-transparent hover:text-blue-600 font-semibold text-md ml-auto mr-auto max-w-fit bg-transparent text-blue-800`} />


    </>

}

export default ForgetPassword;