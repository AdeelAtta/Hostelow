// import { darkTheme, lightTheme, selectTheme } from '@/redux/slices/theme-slice';
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

interface TopBarProps {
  ActivePageName: string

}

const TopBar: React.FC<TopBarProps> = ({ ActivePageName }) => {

  const [isDropDown, setIsDropDown] = useState(false)

  return (

    <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5 z-[7]">
      <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
        <h4 hidden className=" text-2xl font-medium text-gray-900 dark:text-white lg:block lg:text-3xl"> {ActivePageName}</h4>

        {/* <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white">{ActivePageName}</h5> */}

        <div className="flex items-center justify-center space-x-4 ml-auto ">

          <div className="relative mt-4  lg:mt-1">
            <div
              className="flex items-center overflow-hidden rounded-md border bg-white dark:bg-gray-700 dark:border-gray-500"
            >
              <div
                className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-50"
              >
                 Theme
              </div>

              <button onClick={() => setIsDropDown(!isDropDown)}
                className="h-full p-2  text-gray-600 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`absolute end-0 z-[500] mt-2 w-36 rounded-md border border-gray-100 bg-white shadow-lg dark:bg-gray-700 dark:border-gray-500  ${!isDropDown && `hidden`}`}
              role="menu"
            >
              <div className="p-2">
                <div
                  onClick={() => { setIsDropDown(!isDropDown) }}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer dark:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-500"
                >
                  Light Mode
                </div>
                <div
                  onClick={() => { setIsDropDown(!isDropDown) }}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer dark:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-500"
                >
                  Dark Mode
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default TopBar;