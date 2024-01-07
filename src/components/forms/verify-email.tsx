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

const VerifyEmail:React.FC<VerifyEmailProps> = ({closeModal}) => {


    const user = useSelector(userData);
    const dispatch = useDispatch();

    const [userDetail, setUserDetail] = useState({ firstName: ``, lastName: ``, email: `` })
    const [OTP,setOTP] = useState<any>(null);

    useEffect(() => {
        setUserDetail(user)
    }, [])


    const verifyOTP = async(e:React.MouseEvent<HTMLButtonElement>) => {


        if(OTP.length != 6){
            toast.error(`Incorrect OTP Code`)
            return 
        }
        try{
            let response = await toast.promise(postData(`auth/verifyOTP`, { userId: user._id, otp: `${OTP}` }, `${user.access.token}`), {
                pending: `Verifying...`,
                success: `Email Verified`
            })
            if(response.message){
                dispatch(verifyUser())
                setTimeout(() => {
                    closeModal()
                  }, 2000);
            }            
            
        }catch(err){
            console.log(err)
        }

    }


    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            let response = await toast.promise(postData(`auth/sendEmail`, { userId: user._id, email: user.email }, `${user.access.token}`), {
                pending: `Sending Email...`,
                success: `Email Send`
            })
            if(!!response){

                setOTP(``)

            }
        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <ToastContainer position="top-center" />
        <form onSubmit={(e: FormEvent) => handleFormSubmit(e)} className='flex flex-col gap-y-4'>
            {OTP == null ? <>
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-lg font-bold sm:text-2xl text-red-400 dark:text-gray-300">! Please Verify your Email Address</h1>
            </div>
            <p className="max-w-xl text-sm text-center  ">
                Hi <span className="font-semibold">{userDetail.firstName}</span>, We notice your email address has not been verified. By doing so, you will recieve important updates and information about your account
                <br /><br />The email of your account is: <span className="font-bold border-2 px-2 py-1 bg-gray-200 rounded-md">{userDetail.email}</span>
                <br /><br />
            </p>
            <Button text="Send Verification Email" type="submit" customeStyle={`font-bold text-xl`} />
            </>:
            <>
             <div className="mx-auto max-w-lg text-center">
                <h1 className="text-lg font-bold sm:text-3xl text-blue-400 dark:text-gray-300">Verification Code</h1>
            </div>
            <p className="max-w-xl text-sm text-center  my-5">
                Please Enter Verification code Send at  <span className="font-bold border-2 px-2 py-1 bg-gray-200 rounded-md">{userDetail.email}</span>
            </p>

            <Input 
            title="Enter OTP code"
            type="text" 
            name={"OTP"} 
            value={OTP}
            placeholder="OTP code"
            onChange={(e:ChangeEvent<any>)=> setOTP(`${e.target.value}`)}                
            />
            <span className='text-right text-blue-400 font-thin text-sm'>Didn`t receive the OTP? <span onClick={(e)=>handleFormSubmit(e)} className="text-red-600 cursor-pointer font-bold text-md ">Resend OTP</span></span>
            <Button handleClick={(e:any)=>verifyOTP(e)} text="Verify Code" type="button"  customeStyle={`mt-5 font-bold text-xl`} />
            </>}


        </form>

    </>

}

export default VerifyEmail;