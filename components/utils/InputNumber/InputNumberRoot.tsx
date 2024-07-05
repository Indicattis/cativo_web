






import { ReactNode } from "react"
import { motion } from "framer-motion"



interface InputRootProps {
    children: ReactNode
}

export  function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={`w-full h-10 p-1 flex items-center bg-black border-b border-purple
            `}>
            
            {children}
        </motion.div>
    )
}