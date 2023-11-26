import React from 'react'
interface CircleProps {
    customeStyle: string
}
const Circle: React.FC<CircleProps> = ({customeStyle}) => {
    return (
        <div className={`absolute w-28 h-28 rounded-full z-[-1] ${customeStyle}`}>

        </div>
    )
}

export default Circle
