import { ReactNode } from "react"


interface ButtonProps {
    onClick?: () => void
    type?: "button" | "submit" | "reset" | undefined
    children: ReactNode
}


const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {

    return <button
        className="ml-auto font-semibold mb-3 flex justify-center items-center min-w-[150px] gap-2 border-2 rounded-lg px-4 py-2 bg-[#f5f0f6] hover:text-[#f5f0f6] hover:bg-[#3b3717] border-[#3b3717] transition-all"
        onClick={onClick}
        type={type ? `${type}` : `button`}
    >
        {children}
    </button>

}

export default Button