import React, { ReactNode } from 'react'

interface ContentProps {
    children:ReactNode
}
const Content:React.FC<ContentProps> =({children}) =>{
  return (
    <div className="px-6 2xl:container my-10">
    <div className="flex min-h-[90vh] justify-center overflow-hidden oveflow-y-scroll">


    {children}
    </div>
  </div>
  )
}

export default Content