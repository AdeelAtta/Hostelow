import { cleanUserData, userData } from "@/redux/slices/user-slice";
import { postData } from "@/utils/api";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const LogoutButton:React.FC<any> =({text}) =>{

    const user = useSelector(userData)
    const dispatch = useDispatch()
  
    const handleLogout = async () => {
  
      try{
        // let response = await toast.promise(postData(`auth/logout`,{
        //   refreshToken: `${user?.refresh?.token}`
        // },`${user.access.token}`),{
        //   pending: 'Signing out...',
        //   error: 'Something Went Wrong: Network Error 🤯'
        // } )
        
        // toast.success(response.message);
        dispatch(cleanUserData())
  
  
        
      }catch(err){
        console.error('Error:', err);
      }
      
    }
  
      return (
          <button 
          onClick={()=>handleLogout()}
          className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white">{text}</span>
          </button>
      )
  }

  export default LogoutButton;