import React, { ReactNode } from 'react'

interface AsideProps {
  children:ReactNode
}

const Aside:React.FC<AsideProps> = ({children}) => {
  return (
    <aside
      className={`overflow-auto  h-screen min-w-[300px] flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-3/12 lg:ml-0 lg:w-4/12 xl:w-3/12 dark:bg-gray-800 dark:border-gray-700 `}
    >
      <div className='min-w-fit my-10'>
        {children}
      </div>
    </aside>
  )
}

export default Aside