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
            className={`relative p-5 flex items-center justify-center h-[450px] w-[800px] max-lg:w-full
            ${wide == "mobile" ? "h-[600px] w-[412px]" : ""}
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

                        <div className="h-full">
                            <Image src={url} alt="" width={1000} height={1000}/>
                        </div>
                    </motion.div>
                    
                    <div className={`absolute top-0   w-full h-[85%] z-[-1] rounded-3xl shadow-2xl shadow-black
                    ${theme == "neon_green2" ? "bg-neon_green2" : ""}
                    ${theme == "neon_red" ? "bg-gradient-to-tr from-neon_red to-neon_pink" : ""}
                    ${theme == "neon_purple" ? "bg-gradient-to-tr from-neon_purple to-neon_blue" : ""}
                    ${theme == "neon_blue" ? "bg-neon_blue" : ""}
                    ${theme == "neon_green" ? "bg-neon_green" : ""}
                    ${theme == "" ? "bg-dark" : ""}
                    ${theme == "neon_pink" ? "bg-neon_pink" : ""}
                    
                    `}></div>
                </motion.div>
            </AnimatePresence>
    )
}