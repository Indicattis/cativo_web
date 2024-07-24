



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
        className="h-full _text w-full outline-none bg-purple px-3  overflow-hidden relative"
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}