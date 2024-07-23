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
        className="h-full _text w-full outline-none bg-purple px-3 rounded overflow-hidden relative"
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}