import React, { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image'
import {AdminMenu} from '@/utils/menuData'
import { createMenu } from '@/utils/menuData';


interface MenuItem {
    name: string
    route: string
    icon: ReactElement
    displayComponent: React.JSX.Element
}




interface AsideProps {
  handleRoute: (component: MenuItem | null) => void
  currentRoute: String
}

export const Aside: React.FC<AsideProps> = ({ handleRoute, currentRoute }) => {

//   const user = useSelector(selectUser);
  const [DashboardMenu, setDashboardMenu] = useState<any[]>([])

  // Toggles checks for display/hide side menubar
  const [isWindow1024, setIsWindow1024] = useState(false);
  const [toggle, setToggle] = useState(false)

  const [hoverVisible,setHoverVisible] = useState(false);

  const handleClick = (routeParam: string) => {
    const components: MenuItem[] = DashboardMenu.filter((menuItem: MenuItem) => menuItem.route == routeParam)
    if (components.length > 0) {
      handleRoute(components[0]);
    } else {
      handleRoute(null);
    }

  }



  // window size
  useEffect(() => {
    const handleResize = () => {
      // Check if window width is greater than 1024
      if (window.innerWidth >= 1024) {
        // Run your function or perform any action
        setIsWindow1024(true)
        setToggle(false)
      } else {
        setIsWindow1024(false)
      }
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount


  useEffect(()=>{

    //
    // Check if user exist  else reroute to login page


    const getMenu = async() => {
    const response:any[] = createMenu(`admin`)

      setDashboardMenu([...response])
    }

    getMenu()

  },[])

  const showMenu = () => {

    return (
      DashboardMenu.map((menuItem: MenuItem) => {

        return (
          <li key={menuItem.route} className={`overflow-hidden max-w-fit ml-auto mr-auto`}
          onMouseEnter={()=> setHoverVisible(true)} 
          >
            <p 
              onClick={() => (setToggle(false), handleClick(`${menuItem.route}`))}
              aria-label={menuItem.route}
              className={`flex items-center rounded-lg transition-all  px-4 py-3 
              ${(currentRoute == menuItem.route) ? 
                "relative text-white bg-gradient-to-r from-sky-600 to-cyan-400 cursor-default" 
              : "group text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-sky-200 hover:to-cyan-100 dark:hover:bg-gradient-to-r dark:hover:from-sky-800 dark:hover:to-cyan-600 cursor-pointer "
              }`
            }
            >
              {menuItem.icon}
              {  <span className={`${(hoverVisible || !isWindow1024) ? `w-60 ml-2` :``} font-medium  transition-all `}>{(hoverVisible || !isWindow1024) && menuItem.name}</span>}
            </p>
          </li>
        )
      })
    )
  }

  return (<>
     {isWindow1024 || toggle ? <aside onMouseLeave={()=>setHoverVisible(false)}
       className={`${toggle ? ` ` : ` ml-[-100%] `} max-w-fit fixed top-0 z-[1]  flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:px-2 lg:w-[26%] xl:w-[20%] 2xl:w-[16%] dark:bg-gray-800 dark:border-gray-700 `}
     >
       <div className='max-w-fit' onMouseLeave={()=> setHoverVisible(false)}>
         <div className="-mx-6 px-6 py-4">
           <span className="cursor-pointer " onClick={() => handleClick(``)} title="home">
           <Image
              src="/images/common/am-logo.png"
              alt="Analog Mutations logo"
              height={90}
              width={(hoverVisible || !isWindow1024) ? 200 : 70} 
              loader={({ src }) => `/assets/common/HostelBazaar.png`}

            />
           </span>
           {toggle && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="absolute w-7 h-7 shadow-lg rounded-md border border-red-600 rounder-sm hover:scale-[0.96]  cursor-pointer transition-all text-red-700 hover:text-red-900 top-6 right-2 " onClick={() => setToggle(false)}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>}

         </div>


        {/* menu links */}
        <ul className="mt-8 space-y-1 tracking-wide max-w-fit ml-auto mr-auto">
          {showMenu()}
        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
        {/* <LogoutButton /> */}
      </div>

        </aside>
      : <button className="fixed z-[8]  ml-3 h-16 w-12  lg:hidden dark:text-gray-300 text-gray-600" onClick={() => setToggle(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto h-10 w-10 "
          fill="red"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    }
  </>

  )

}

export default Aside;

function generateMenu(arg0: string) {
  throw new Error('Function not implemented.');
}

