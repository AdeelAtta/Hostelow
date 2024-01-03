
interface InputProps {
    title?: string
    placeholder?: string
    type: string
    name: string
    value: string | number
    onChange: (e: any) => void;
    otherProps?: any
    horizontal?: boolean

}

const Input: React.FC<InputProps> = ({ title, placeholder, type, name, value, onChange, horizontal = false, otherProps }) => {


    return <>
        <label className={`dark:text-gray-50 text-gray-900 `} htmlFor={`${name}`}>
            {!!title && `${title} :`}
            {!horizontal && <br />}
            <input
                {...otherProps}
                type={`${type}`}
                name={`${name}`}
                id={`${name}`}
                placeholder={`${placeholder}`}
                className={`w-full rounded-lg border-2 border-gray-200 px-3 py-[0.65rem] text-sm dark:bg-gray-600 dark:text-gray-50 text-gray-900 dark:border-gray-800  ${otherProps?.disabled && ` cursor-not-allowed `}`}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </label>

    </>

}

export default Input;