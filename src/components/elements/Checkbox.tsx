import React from 'react'
interface CheckBoxProps {
    children: React.ReactNode,
}
const Checkbox: React.FC<CheckBoxProps> = ({children}) => {
    return (
        <div className='flex gap-x-4 px-4'>
            <input type="checkbox" name="" id="" />
            {children}
        </div>
    )
}

export default Checkbox
