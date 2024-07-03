import { motion } from "framer-motion"


interface InputBoxProps {
    placehoder: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    disabled: boolean
}


export default function InputBox({ placehoder, onChange, disabled }: InputBoxProps) {
    return (
        <motion.input 
        className="h-full w-full bg-transparent outline-none border rounded border-contrast_color_2 px-3 focus:border-neon_purple"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placehoder}
        disabled={disabled}
        />
    )
}