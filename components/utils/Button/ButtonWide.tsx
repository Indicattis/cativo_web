import { ReactNode } from "react"
import { motion } from "framer-motion"



interface ButtonWideProps {
    children: ReactNode
    wide: "sm" | "lg" | "md" | "xl" | "full",
    rounded: "sm" | "lg" | "md" | "xl" | "full",
    variant: "default" | "red" | "blue" | "green" | "gray" | "black" | "disabled",
    onClick?: () => void
    disabled?: boolean
}

export default function ButtonWide ( { children, wide, rounded, variant = "default", onClick, disabled }: ButtonWideProps) {
    return (
        <motion.button 
        onClick={onClick}
        whileTap={{scale: .95}}
        disabled={disabled}
        className={`
            flex justify-center items-center gap-1
            px-5 py-2
            ${variant == "default" ? "bg-neon_purple" : ""}
            ${variant == "red" ? "bg-neon_red" : ""}
            ${variant == "green" ? "bg-neon_green" : ""}
            ${variant == "blue" ? "bg-neon_blue" : ""}
            ${variant == "gray" ? "bg-palette_gray" : ""}
            ${variant == "black" ? "bg-black" : ""}
            ${variant == "disabled" ? "bg-purple" : ""}
            ${wide == "sm" ? "h-8 _text _small" : ""}
            ${wide == "md" ? "h-10 _text _small" : ""}
            ${wide == "lg" ? "h-12 _text " : ""}
            ${wide == "xl" ? "h-16 _display_text" : ""}
            ${wide == "full" ? "h-20 w-20 _display_text " : ""}
            ${rounded == "sm" ? "rounded-sm" : ""}
            ${rounded == "md" ? "rounded-md" : ""}
            ${rounded == "lg" ? "rounded-lg" : ""}
            ${rounded == "full" ? "rounded-full" : ""}
            `}>
            
            {children}
        </motion.button>
    )
}