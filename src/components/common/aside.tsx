import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaSearchengin } from "react-icons/fa6";


interface MenuItem {
  name: string
  route: string
  icon: ReactElement
  displayComponent: React.JSX.Element
}




interface AsideProps {
  children:ReactNode
}

export const Aside: React.FC<AsideProps> = ({ children }) => {


  // Toggles checks for display/hide side menubar
  const [isWindow1024, setIsWindow1024] = useState(false);
  const [toggle, setToggle] = useState(false)

  const [hoverVisible, setHoverVisible] = useState(false);




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






  return (<>
    <aside onMouseLeave={() => setHoverVisible(false)} 
      className={`${hoverVisible ? ` min-w-fit max-w-[400px] `:`  fixed top-0 max-w-0 !-ml-[11%] md:!-ml-[6%] lg:!-ml-[1%]`} z-[1]  flex min-h-screen h-full w-full flex-col justify-between border-r bg-white px-6 pb-3 md:w-4/12 lg:ml-0 lg:px-2 lg:w-[26%] xl:w-[20%] 2xl:w-[16%] dark:bg-gray-800 dark:border-gray-700 transition-all  duration-400`}
    >
      <div className='max-w-fit min-h-[100%]' >
        <div className="py-6">

        </div>
        {/* menu links */}
        {hoverVisible && <ul className="mt-8 space-y-1 tracking-wide max-w-fit ml-auto mr-auto">
         {children}
        </ul>}
      </div>
      <div 
      onClick={()=>setHoverVisible(true) } 
      className='cursor-pointer absolute search-box  rounded-tr-2xl rounded-br-2xl bg-violet-50 w-[4rem] h-[4rem] -right-16
       top-28 '>
      <FaSearchengin className="w-full h-full p-3 text-orange-600" />
      </div>
    </aside>
  </>

  )

}

export default Aside;

