import { ReactNode } from "react"
import { motion } from "framer-motion"
import { getColorRGB } from "@/functions/color"



interface ButtonWideProps {
    children: ReactNode
    wide: "sm" | "lg" | "md" | "xl" | "full",
    rounded: "sm" | "lg" | "md" | "xl" | "full",
    variant: "default" | "red" | "blue" | "green" | "gray" | "black" | "disabled"| "purple",
    onClick?: () => void
    disabled?: boolean
    type?: "submit" | "button"
}

export default function ButtonWide ( { children, wide, rounded, variant = "default", onClick, disabled, type }: ButtonWideProps) {
    return (
        <motion.button 
        onClick={onClick}
        whileTap={{scale: .95}}
        disabled={disabled}
        animate={{
            background: getColorRGB(variant)
        }}
        type={type}
        className={`
            flex justify-center items-center gap-1
            py-2
            ${disabled ? "!bg-purple" : ""}
            ${wide == "sm" ? "h-8 _text _small" : ""}
            ${wide == "md" ? "h-12 !px-3 _text _small" : ""}
            ${wide == "lg" ? "h-14 !px-4  _text " : ""}
            ${wide == "xl" ? "h-16 !px-5  _display_text" : ""}
            ${wide == "full" ? "h-20 w-20 _display_text " : ""}
            ${rounded == "sm" ? "rounded-[3px]" : ""}
            ${rounded == "md" ? "rounded-md" : ""}
            ${rounded == "lg" ? "rounded-lg" : ""}
            ${rounded == "full" ? "rounded-full" : ""}
            `}>
            
            {children}
        </motion.button>
    )
}