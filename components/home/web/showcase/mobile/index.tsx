import { IconCopy, IconPointFilled, IconSeparator, IconSpace, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


interface ItemProps {
    url: string
    wide: string
}

export default function MobileShowcase({url, wide}: ItemProps) {

    return (
        <AnimatePresence>
            <motion.div 
            className={`relative p-2 flex items-center justify-center h-[400px] w-[212px]`}>
                    <motion.div 
                    className="w-full h-full shadow-lg rounded-3xl overflow-hidden shadow-black z-20">
                        <div className="absolute top-0 flex w-full justify-center">
                            <div className={`flex justify-center rounded-b-2xl w-24 !bg-dark
                                `}>
                                <IconSeparator  className="opacity-45" color="#000000"></IconSeparator>
                            </div>
                        </div>

                        <div className="h-full z-20">
                            <Image  draggable={false} src={url} alt="" width={1000} height={1000}/>
                        </div>
                    </motion.div>
                    
                    <div className={`absolute top-0   w-full h-full z-10 rounded-[30px] shadow-2xl shadow-black !bg-dark
                    `}></div>
                </motion.div>
            </AnimatePresence>
    )
}