import { InputHTMLAttributes } from "react"


interface InputBoxNumber  extends InputHTMLAttributes<HTMLInputElement> {
    placehoder: string
    disabled?: boolean
    value?: string
}


export function InputBoxNumber({ placehoder, disabled, value, ...rest}: InputBoxNumber) {
    return (
        <input 
        {...rest}
        className="h-full _text w-full outline-none bg-transparent rounded px-3"
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}