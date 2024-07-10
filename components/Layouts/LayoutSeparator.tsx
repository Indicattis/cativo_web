"use client"

import { motion } from "framer-motion"
import { useState } from "react"



export default function LayoutSeparator() {
    const [hover, setHover] = useState(false)



    const duration = 10
    const times = [0, 5, 10]
    const y = [-200, 0, 0, 0, 0, 0, 200]
    return (
        <motion.div 
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-full p-2 flex items-center justify-center flex-col gap-2 cursor-pointer overflow-hidden">
            <motion.div
            initial={{opacity:1}}
            animate={{y: y}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.6
            }}
            className="h-[2px] flex  bg-neon_purple rounded-full shadow-lg shadow-neon_purple w-[80px]"></motion.div>
            <motion.div
            initial={{opacity:0.9}}
            animate={{y: y}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.5
            }}
            className="h-[2px] flex w-[60px] bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.8}}
            animate={{y: y}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.4
            }}
            className="h-[2px] flex w-[45px] bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.7}}
            animate={{y: y}}
            exit={{y: 200}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.3
            }}
            className="h-[2px] flex w-[35px] bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.6}}
            animate={{y: y}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.2
            }}
            className="h-[2px] flex w-[23px] bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.5}}
            animate={{y: y}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.1
            }}
            className="h-[2px] flex w-[12px] bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.4}}
            animate={{y: y}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
            }}
            className="h-[2px] flex w-[5px] bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
        </motion.div>
    )
}