import React from 'react'
interface CheckBoxProps {
    name:string
    children: React.ReactNode,
    otherProps?:any
}
const Checkbox: React.FC<CheckBoxProps> = ({name,otherProps,children}) => {
    return (
        <div className='flex gap-x-4 px-4'>
            <input {...otherProps} type="checkbox" name={name} id={name} />
            {children}
        </div>
    )
}

export default Checkbox
