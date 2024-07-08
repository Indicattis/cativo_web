



import { InputHTMLAttributes } from "react"


interface InputBoxMailProps  extends InputHTMLAttributes<HTMLInputElement> {
    placehoder: string
    disabled?: boolean
    value?: string
}


export function InputBoxMail({ placehoder, disabled, value, ...rest}: InputBoxMailProps) {
    return (
        <input 
        type="mail"
        {...rest}
        className="h-full _text w-full outline-none bg-transparent rounded px-3"
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}