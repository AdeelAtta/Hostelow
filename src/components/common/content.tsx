import React, { ReactNode } from 'react'

interface ContentProps {
    children:ReactNode
}
const Content:React.FC<ContentProps> =({children}) =>{
  return (
    <div className="px-6 lg:container my-10 max-w-screen-2xl">
    <div className="flex justify-center overflow-hidden oveflow-y-scroll">


    {children}
    </div>
  </div>
  )
}

export default Content