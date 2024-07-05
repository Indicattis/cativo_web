import { InputHTMLAttributes } from "react"


interface InputBoxProps  extends InputHTMLAttributes<HTMLInputElement> {
    placehoder: string
    disabled?: boolean
    value?: string
}


export function InputBox({ placehoder, disabled, value, ...rest}: InputBoxProps) {
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