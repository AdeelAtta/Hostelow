import React from 'react'
interface CircleProps {
    customeStyle: string
}
const Circle: React.FC<CircleProps> = ({customeStyle}) => {
    return (
        <div className={`absolute w-36 h-36 opacity-80 rounded-full z-[-1] ${customeStyle}`}>

        </div>
    )
}

export default Circle
