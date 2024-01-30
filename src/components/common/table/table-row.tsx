import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";



interface DataRowProps {
    indexKey: number,
    row: {
        icon?: ReactNode
        type: string,  //for input types
        text: string,  // for placeholder or text
        name?: string, // for name and id to manage data on change
        features?: feature[], // for manage dropdown to update delete tasks
        options?: any[], // options for drop down
        onChange?: (e: any) => void, button?: (data: any) => void
    }[],
    noOfColumns: number
    disable?: boolean
}
interface TaskForm {
    taskId: string,
    description: string,
    startDateTime: string,
    endDateTime: string,
    totalDuration: string
}


const TableRow: React.FC<DataRowProps> = ({ indexKey, row, noOfColumns, disable = false }) => {

    const initial = {}
    const [currentTask, setCurrentTask] = useState<any>(initial)
    const [isDisabled, setIsDisabled] = useState(true);
    const [disableRowLength, setdisableRowLength] = useState(!disable)


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setCurrentTask((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    return (
        <tr key={indexKey} className={` odd:bg-gray-50 dark:odd:bg-gray-800/50 p-5`}>
            {
                row.length > 0 && row.map((cell, index) => {
                    if (noOfColumns == index) {
                        return undefined;
                    }

                    const { text, type, name, button, options, features } = cell



                    switch (type.toLowerCase()) {
                        case `none`:
                            return <Td index={index} className={` text-lg `}  ><span className={` `} >{cell.text}</span></Td>
                        case `number`:
                            return <Td index={index}  ><input className={`${(!isDisabled || disableRowLength) ? `rounded-md  border-2 border-gray-300 dark:border-gray-500 dark:bg-gray-800` : ` bg-transparent`} w-16  py-1 placeholder:text-gray-200 dark:placeholder:text-gray-500 text-lg text-center`} type={type} value={currentTask[`${name}`] ?? text} name={name} placeholder={text} onChange={(e) => handleChange(e)} disabled={disableRowLength ? false : isDisabled} /></Td>
                        case `text`:
                            return <Td index={index}   ><input className={`${(!isDisabled || disableRowLength) ? `rounded-md  border-2 border-gray-300 dark:border-gray-500 dark:bg-gray-800` : ` bg-transparent`}  px-3 py-1 placeholder:text-gray-200 dark:placeholder:text-gray-500 text-lg text-center`} type={type} value={currentTask[`${name}`] ?? text} name={name} placeholder={text} onChange={(e) => handleChange(e)} disabled={disableRowLength ? false : isDisabled} /></Td>
                        case `datetime-local`:
                            return <Td index={index}  ><input className={`${(!isDisabled || disableRowLength) ? `rounded-md  border-2 border-gray-300 dark:border-gray-500 dark:bg-gray-800` : ` bg-transparent`} px-3 py-1 placeholder:text-gray-200 dark:placeholder:text-gray-500 text-lg text-center `} type={type} value={currentTask[`${name}`] ? currentTask[`${name}`].slice(0, 16) : text ? text.slice(0, 16) : ``} name={name} placeholder={text} onChange={(e) => handleChange(e)} disabled={disableRowLength ? false : isDisabled} /></Td>
                        case `dropdown`:
                            return <Td index={index}  >
                                <div className='w-40 mr-2 '>
                                    <select disabled={disableRowLength ? false : isDisabled}
                                        name={`${name}`}
                                        id={`${name}`}
                                        value={currentTask[`${name}`]}
                                        onChange={(e) => handleChange(e)}
                                        className={`rounded-md text-gray-700 dark:text-gray-300 focus-within:border-gray-500 dark:border-gray-400 dark:bg-gray-800 sm:text-sm p-2 w-full ${(disableRowLength || !isDisabled) ? `border-2 bg-white` : `border-none`}`}
                                        // placeholder='type'
                                    >
                                        <option value={`${text.length > 0 ? text : ``}`}> {text?.length > 0 ? text : `-- Select -- `}</option>
                                        {options && options.length > 0 && options.map((option: any) => {
                                            return <option key={option.id} value={`${option.id}`}>{`${option.name}`}</option>
                                        })
                                        }
                                    </select>
                                </div>
                            </Td>
                        case `manage`:
                            return <ManageOptions indexKey={index} features={features} currentTask={currentTask}/>
                        case `add`:
                            return <Td index={index} className={` text-2xl `}  ><span className={` flex  items-center justify-center ${cell?.button ? ` cursor-pointer text-blue-600 ` : ``}`} onClick={() => cell.button?.(currentTask)}>{cell.icon}</span></Td>

                        default: null;

                    }

                })
            }
        </tr>
    )
}

export default TableRow


type feature = {
    icon?: ReactNode
    text: string
    button: (data?: any) => void
}

interface ManageOptionsProps {
    features: feature[] | undefined
    indexKey: number
    currentTask:TaskForm
}

const ManageOptions: React.FC<ManageOptionsProps> = ({ features, indexKey, currentTask }) => {

    const [isDropDown, setIsDropDown] = useState<boolean>(false)


    if (features && features.length == 1) {
        const { icon, text, button } = features[0];
        return <Td index={indexKey}  >
            <span className={`flex items-center justify-center cursor-pointer hover:text-blue-800  text-lg transition`} onClick={()=>button(currentTask)}>
                {icon}
            </span>
        </Td>

    }

    return <Td index={indexKey} >
        <div className="relative" onMouseLeave={() => setIsDropDown(false)}>
            <BsThreeDotsVertical className="text-2xl  ml-auto mr-auto cursor-pointer" onClick={() => setIsDropDown(true)} />
            <div
                className={`border-2 absolute end-5 !z-[500] w-46 rounded-md  border-gray-100 bg-white shadow-lg dark:bg-gray-700 dark:border-gray-500 transition-all   ${!isDropDown && `hidden `}`}
                role="menu"
            >
                <div className={`p-2 w-44  ${!isDropDown && `absolute border-2  `}`}>
                    {features && features.map((feature: feature, index: number) => {
                        return <div key={index}
                            onClick={() => { feature.button(currentTask); setIsDropDown(!isDropDown) }}
                            className="flex items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700 cursor-pointer dark:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-400"
                        >
                            {feature?.icon} {feature.text}
                        </div>
                    })

                    }

                </div>
            </div>
        </div>
    </Td>
}


type TdProps = {
    index:number
    className?:string
    children:ReactNode
}


const Td:React.FC<TdProps> = ({index,className, children}) =>{

    return <td key={index} className={` whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 ${className ? className : ``} `}>
        {children}
    </td>
}


                    // if (type.toLowerCase() == `dropdown`) {
                    //     return <td key={index} className={` whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200`}  >
                    //         <div className='w-40 mr-2 '>
                    //             <select disabled={disableRowLength ? false : isDisabled}
                    //                 name={`${name}`}
                    //                 id={`${name}`}
                    //                 value={currentTask[`${name}`]}
                    //                 onChange={(e) => handleChange(e)}
                    //                 className={`rounded-md text-gray-700 dark:text-gray-300 focus-within:border-gray-500 dark:border-gray-400 dark:bg-gray-800 sm:text-sm p-2 w-full ${(disableRowLength || !isDisabled) ? `border-2 bg-white` : `border-none`}`}
                    //                 placeholder='activity type'
                    //             >
                    //                 <option value={`${text.length > 0 ? text : ``}`}>-- {text?.length > 0 ? text : `Select`} --</option>
                    //                 {options && options.length > 0 && options.map((option: any) => {
                    //                     return <option key={option.id} value={`${option.id}`}>{`${option.name}`}</option>
                    //                 })
                    //                 }
                    //             </select>
                    //         </div>
                    //     </td>
                    // }


                    
                        // case `button`: {

                        //     // if (text.toLowerCase() == `add task`) {
                        //     //     return <td key={index} className={`whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-lg`}  ><span className={` ${statusCss[`${cell.text}`]} ${cell?.button ? ` cursor-pointer text-blue-600 ` : ``}`} onClick={() => cell.button?.(currentTask)}><IoMdAddCircleOutline /></span></td>
                        //     // }
                        //     // if (text.toLowerCase() === `update`) {
                        //     //     return <td key={index} className={`whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200`}  ><span className={` ${button ? ` cursor-pointer  hover:text-blue-400  text-lg` : ``}`} onClick={() => { (cell.button?.(currentTask), setIsDisabled(true)) }}>{<IoCloudUploadOutline />}</span></td>
                        //     // } else if (text.toLowerCase() === `delete`) {
                        //     //     return <td key={index} className={`whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200`}  ><span className={` ${button ? ` cursor-pointer hover:text-red-800 text-lg` : ``}`} onClick={cell?.button}><RiDeleteBinLine className={`hover:scale-105 transition-all`} /> </span></td>
                        //     // } else
                        //     // if (text.toLowerCase() === `copy`)
                        //     //     return <td key={index} className={`whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200`}  ><span className={`flex items-center justify-center ${button ? ` cursor-pointer hover:text-blue-800  text-lg transition` : ``}`} onClick={cell?.button}><FaRegCopy className={`hover:scale-110 transition-all`} /> </span></td>
                        // } break;