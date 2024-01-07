import { ReactNode } from "react"


interface ButtonProps {
    onClick?: () => void
    type?: "button" | "submit" | "reset" | undefined
    children: ReactNode
    otherProps?:any
}


const Button: React.FC<ButtonProps> = ({ type, onClick, otherProps,children }) => {

    return <button
        {...otherProps}
        className="ml-auto font-semibold mb-3 flex justify-center items-center min-w-[150px] gap-2 border-2 rounded-xl px-4 py-2 bg-[#3b3717] text-white hover:text-[#f5f0f6] hover:bg-[#3b3717bb] transition-all"
        onClick={onClick}
        type={type ? `${type}` : `button`}
    >
        {children}
    </button>

}

export default Button