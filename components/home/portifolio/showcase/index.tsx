import { IconCopy, IconPointFilled, IconSpace, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


interface ItemProps {
    url: string
    theme: string
    wide: string
}

export default function PortifolioShowcase({url, theme, wide}: ItemProps) {

    return (
        <AnimatePresence>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`relative p-5 flex items-center justify-center
            ${wide == "sm" ? "h-[100px] w-[200px] pointer-events-none" : ""}
            ${wide == "md" ? "h-[300px] w-[450px] pointer-events-none" : ""}
            ${wide == "lg" ? "h-[450px] w-[800px]" : ""}
            ${wide == "mobile" ? "h-[600px] w-[412px]" : ""}
            `}>
                    <div className="w-full h-full shadow-lg rounded-3xl overflow-hidden shadow-black">
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

                            <div className="h-full">
                            <iframe 
                                src={url} 
                                title="Website" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    border: 'none'
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={`absolute top-0   w-full h-[85%] z-[-1] rounded-3xl shadow-2xl shadow-black
                    ${theme == "neon_green" ? "bg-gradient-to-tr from-neon_green to-neon_green2" : ""}
                    ${theme == "neon_red" ? "bg-gradient-to-tr from-neon_red to-neon_pink" : ""}
                    ${theme == "neon_purple" ? "bg-gradient-to-tr from-neon_purple to-neon_blue" : ""}
                    ${theme == "neon_blue" ? "bg-neon_blue" : ""}
                    ${theme == "" ? "bg-dark" : ""}
                    
                    `}></div>
                </motion.div>
            </AnimatePresence>
    )
}