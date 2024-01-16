import Aside from '@/components/common/dashboard-components/aside'
import Content from '@/components/common/dashboard-components/content'
import TopBar from '@/components/common/dashboard-components/top-bar'
import { userData } from '@/redux/slices/user-slice'
import React, { ReactElement, useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import router from 'next/router'
import Modal from '@/components/common/modals/modal'
import VerifyEmail from '@/components/forms/verify-email'

interface MenuItem {
  name: string
  route: string
  icon: ReactElement
  displayComponent: React.JSX.Element
}

const initialPage = null;

const Dashboard = () => {

  const user = useSelector(userData)
  const [currentPage, setCurrentPage] = useState<MenuItem | null>(initialPage);
  const [isModal,setIsModal] = useState(false);

  if(!user){

  }

  useEffect(()=>{
    if(!user){
      router.push(`/login`)
    }else{
      if(user?.access && user.access?.expires){
        const expireDate = new Date(user.access.expires);
        const now = new Date()
        if(expireDate < now){
          router.push(`login`)
        }
      }else{
        router.push(`login`)
      }
    }
  },[user])

  const handleRoute = (menuItem: MenuItem | null) => {
    setCurrentPage(menuItem);
    if(!user?.isVerified){
      setIsModal(true);
    }
  }


  return (<>
    <div className="bg-gray-100 dark:bg-gray-900">

      <Aside handleRoute={handleRoute} currentRoute={currentPage ? currentPage.route : ''} />

      {/* Right side */}
      <div className="ml-auto lg:max-w-[92%] xl:max-w-[93%] 2xl:max-w-[94%]">      {/* Right side */}
      {/* <TopBar ActivePageName={currentPage ? currentPage.name : `Welcome`} /> */}

      <Content displayComponent={currentPage ? currentPage.displayComponent : <h1>No Data Found</h1>} />
      </div>

    </div>
    <Modal 
    title={''} 
    isModal={isModal} 
    closeModal={()=>setIsModal(false)} >
      <VerifyEmail closeModal={()=>setIsModal(false)}/>
    </Modal>
    </>
  )
}

export default Dashboard