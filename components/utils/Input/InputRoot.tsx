






import { ReactNode } from "react"
import { motion } from "framer-motion"



interface InputRootProps {
    children: ReactNode
}

export function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={`w-full h-14 rounded gap-3 flex items-center
            `}>
            
            {children}
        </motion.div>
    )
}