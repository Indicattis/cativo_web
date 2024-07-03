






import { ReactNode } from "react"
import { motion } from "framer-motion"



interface InputRootProps {
    children: ReactNode
}

export default function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={`w-full h-10 flex items-center gap-5
            `}>
            
            {children}
        </motion.div>
    )
}