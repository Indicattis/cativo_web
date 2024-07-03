import { ReactNode } from "react"
import { motion } from "framer-motion"
interface ModalBoxProps {
    children: ReactNode
}


export default function ModalBox({children}: ModalBoxProps) {
    return (
        <motion.div 
        initial={{scale:0}}
        animate={{scale:1}}
        exit={{scale:0}}
        className="w-[500px] h-auto max-md:w-[90%] bg-purple rounded-[20px] p-3 flex flex-col gap-5">
            {children}
        </motion.div>
    )
}