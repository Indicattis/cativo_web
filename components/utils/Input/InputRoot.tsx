






import { ReactNode } from "react"
import { motion } from "framer-motion"



interface InputRootProps {
    children: ReactNode
}

export function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={`w-full h-10 rounded overflow-hidden flex items-center bg-purple  border-white
            `}>
            
            {children}
        </motion.div>
    )
}