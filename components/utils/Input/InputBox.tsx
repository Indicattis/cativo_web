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
        className="h-full _text w-full outline-none bg-purple px-3 rounded overflow-hidden relative"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}