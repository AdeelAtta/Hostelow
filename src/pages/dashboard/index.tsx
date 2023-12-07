import Aside from '@/components/common/dashboard-components/aside'
import Content from '@/components/common/dashboard-components/content'
import TopBar from '@/components/common/dashboard-components/top-bar'
import React, { ReactElement, useState } from 'react'

interface MenuItem {
  name: string
  route: string
  icon: ReactElement
  displayComponent: React.JSX.Element
}

const initialPage = null;

const Dashboard = () => {

  const [currentPage, setCurrentPage] = useState<MenuItem | null>(initialPage);


  const handleRoute = (menuItem: MenuItem | null) => {
    setCurrentPage(menuItem);

  }


  return (
    <div className="bg-gray-100 dark:bg-gray-900">

      <Aside handleRoute={handleRoute} currentRoute={currentPage ? currentPage.route : ''} />

      {/* Right side */}
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      {/* <TopBar ActivePageName={currentPage ? currentPage.name : `Welcome`} /> */}

      <Content displayComponent={currentPage ? currentPage.displayComponent : <h1>No Data Found</h1>} />
      </div>

    </div>
  )
}

export default Dashboard