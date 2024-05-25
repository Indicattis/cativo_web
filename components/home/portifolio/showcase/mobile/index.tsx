import { IconCopy, IconPointFilled, IconSeparator, IconSpace, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


interface ItemProps {
    url: string
    theme: string
    wide: string
}

export default function MobileShowcase({url, theme, wide}: ItemProps) {

    return (
        <AnimatePresence>
            <motion.div 
            className={`relative p-2 flex items-center justify-center
            ${wide == "mobile" ? "h-[600px] w-[312px]" : ""}
            `}>
                    <motion.div 
                    className="w-full h-full shadow-lg rounded-3xl overflow-hidden shadow-black z-20">
                        <div className="absolute top-0 flex w-full justify-center">
                            <div className={`flex justify-center rounded-b-2xl w-24
                                ${theme == "neon_green2" ? "bg-neon_green2" : ""}
                                ${theme == "neon_red" ? "bg-gradient-to-tr from-neon_red to-neon_pink" : ""}
                                ${theme == "neon_purple" ? "bg-gradient-to-tr from-neon_purple to-neon_blue" : ""}
                                ${theme == "neon_blue" ? "bg-neon_blue" : ""}
                                ${theme == "neon_green" ? "bg-neon_green" : ""}
                                ${theme == "" ? "bg-dark" : ""}
                                ${theme == "neon_pink" ? "bg-neon_pink" : ""}`}>
                                <IconSeparator  className="opacity-45" color="#000000"></IconSeparator>
                            </div>
                        </div>

                        <div className="h-full z-20">
                            <Image src={url} alt="" width={1000} height={1000}/>
                        </div>
                    </motion.div>
                    
                    <div className={`absolute top-0   w-full h-full z-10 rounded-[30px] shadow-2xl shadow-black bg-dark
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