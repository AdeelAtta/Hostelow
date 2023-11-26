import React from 'react'
interface InputProps {
    icon?: React.ReactElement,
    type: string,
    name: string
    placeHolder: string
    handleChange: Function
}
const Input: React.FC<InputProps> = ({ icon, type, name, placeHolder, handleChange }) => {
    return (
        <div className='flex items-center gap-4 w-full border-2 border-gray-200  shadow-lg relative rounded-full'>
            {
                icon &&
                <div className="absolute left-4">
                    {icon}
                </div>
            }
            <input type={type} name={name} placeholder={placeHolder} className={`w-full py-2 rounded-full placeholder-black ${icon ? "pl-10" : "pl-4 "}`}
                onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default Input
