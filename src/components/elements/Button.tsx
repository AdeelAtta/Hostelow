import React from 'react'
interface buttonProps {
    text: string
    handleClick?: Function
    type: "button" | "submit" | "reset"
    customeStyle?: string
}
const Button: React.FC<buttonProps> = ({ text, handleClick, type, customeStyle }) => {
    return (
        <button
            type={type}
            onClick={() => handleClick && handleClick()}
            className={`bg-blue-500 rounded-full py-2 text-white flex items-center justify-center ${customeStyle}`}
        >
            {text}
        </button>
    )
}

export default Button
