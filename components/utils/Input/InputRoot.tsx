






import { ReactNode } from "react"
import { motion } from "framer-motion"



interface InputRootProps {
    children: ReactNode
}

export function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={`w-full h-12  rounded flex items-center overflow-hidden relative bg-purple
            `}>
            
            {children}
        </motion.div>
    )
}