
type option = {
    key: string
    value: string
}

interface SelectOptionsProps {
    value: string,
    onChange: (e: any) => void;
    name: string,
    options: option[]
    title?: string
    otherProps?:any
    placeholder?:string
}

const SelectOptions: React.FC<SelectOptionsProps> = ({ title, name, value, onChange, options,otherProps,placeholder }) => {

    return <>
        <label htmlFor={`${name}`} className="text-left text-gray-700  dark:text-gray-300 flex flex-col"> {!!title && `${title} :`}
            <select
                {...otherProps}
                onChange={(e) => onChange(e)}
                value={`${value}`}
                name={`${name}`}
                id={`${name}`}
                className={`rounded-md text-gray-700 sm:text-md px-4 py-2 border-2 dark:text-gray-300 dark:border-gray-500 !bg-white dark:!bg-gray-800 dark:focus-within:border-gray-400 ${otherProps?.className ?? ``}`}
                placeholder={`${placeholder ? placeholder : name}`}
            >
                {options.map(option => <option key={option.key} value={option.key}>{option.value}</option>)}
            </select>
        </label>
    </>
}

export default SelectOptions;