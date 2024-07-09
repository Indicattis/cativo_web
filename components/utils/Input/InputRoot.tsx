






import { ReactNode } from "react"
import { motion } from "framer-motion"



interface InputRootProps {
    children: ReactNode
}

export function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={`w-full h-14 rounded  flex items-center shadow-lg shadow-indigo-950
            `}>
            
            {children}
        </motion.div>
    )
}