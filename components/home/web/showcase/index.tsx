import { IconCopy, IconPointFilled, IconSpace, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


interface ItemProps {
    url: string | undefined
    theme?: string
    key: number | undefined
}

export default function WebsiteShowcase({url, theme, key}: ItemProps) {
    const [color, setColor] = useState("")

    
    theme == "neon_green2" && setColor("bg-neon_green2")
    theme == "neon_red" && setColor("bg-gradient-to-tr from-neon_red to-neon_pink")
    theme == "neon_purple" && "bg-gradient-to-tr from-neon_purple to-neon_blue"
    theme == "neon_blue" && "bg-neon_blue"
    theme == "neon_green" && "bg-neon_green"
    theme == "" && "bg-dark"
    theme == "neon_pink" && "bg-neon_pink"

    return (
        <AnimatePresence>
            <motion.div
            key={key}
            initial={{ opacity: 0, y: 100}} 
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 100}}
            transition={{
                x: { type: "spring", stiffness: 600, damping: 50 },
                opacity: { duration: 0.5 },
            }}
            className={`relative p-5 flex items-center justify-center h-full w-full max-w-[800px] max-h-[600px]
            `}>
                    <motion.div 
                    className="w-full h-full shadow-lg rounded-3xl overflow-hidden shadow-black">
                        <div className="bg-dark h-10 p-2 flex justify-between">
                            <div className=" flex">
                                <IconPointFilled color="#ff0066"></IconPointFilled>
                                <IconPointFilled color="#FFF419"></IconPointFilled>
                                <IconPointFilled color="#47ff0a"></IconPointFilled>
                            </div>
                            <div className="flex gap-3">
                                <IconSpace width={20} color="rgb(44 47 52)"/>
                                <IconCopy width={20} color="rgb(44 47 52)"/>
                                <IconX width={20} color="rgb(44 47 52)"/>
                            </div>
                        </div>

                        <div className="h-full max-h-[400px]">
                            <Image draggable={false} src={url ? url : ""} alt="" width={1000} height={1000}/>
                        </div>
                    </motion.div>
                    
                    <div className={`absolute top-0   w-full h-[85%] z-[-1] rounded-3xl shadow-2xl shadow-black transition-all
                    ${color}
                    `}></div>
                </motion.div>
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 100}} 
                    animate={{ opacity: 1, y: 0}}
                    exit={{ opacity: 0, y: 100}}
                    transition={{
                        x: { type: "spring", stiffness: 600, damping: 50 },
                        opacity: { duration: 0.5 }, delay: 1
                    }}>
                        
                </motion.div>
            </AnimatePresence>
    )
}