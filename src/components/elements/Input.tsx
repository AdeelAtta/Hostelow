import React from 'react'

const Input: React.FC<InputProps> = ({ icon, type, name, placeHolder, handleChange,value }) => {
    return (
        <div className='flex gap-4 w-full border-2 border-gray-200  shadow-lg relative rounded-full'>
            {
                icon &&
                <div className="absolute left-5 top-[50%] translate-y-[-50%]">
                    {icon}
                </div>
            }
            <input type={type} name={name} value={value} placeholder={placeHolder} className={`w-full py-2 leading-7 rounded-full placeholder-gray ${icon ? "pl-12" : "pl-4 "}`}
                onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default Input

interface InputProps {
    icon?: React.ReactElement,
    type: string,
    name: string
    value?:string | number | undefined
    placeHolder: string
    handleChange: Function
}