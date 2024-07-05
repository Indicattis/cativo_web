import { motion } from "framer-motion"


interface InputBoxProps {
    placehoder: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    disabled?: boolean
    value?: string
}


export function InputBox({ placehoder, onChange, disabled, value}: InputBoxProps) {
    return (
        <motion.input 
        className="h-full _text w-full outline-none bg-transparent rounded px-3"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}