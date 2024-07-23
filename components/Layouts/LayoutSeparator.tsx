"use client"

import { motion } from "framer-motion"
import { useState } from "react"



export default function LayoutSeparator() {
    const [hover, setHover] = useState(false)



    const duration = 5
    const times = [0, 3, 5]
    const variant_1 = [30, 45, 30, 45, 30, 45, 30]
    const variant_2 = [28, 40, 28, 40, 28, 40, 28]
    return (
        <motion.div 
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-full p-1 flex items-center justify-center h-20 gap-2 cursor-pointer overflow-hidden border-t border-neon_purple">
            <motion.div
            initial={{opacity:1}}
            animate={{height: variant_2}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.6
            }}
            className=" flex w-1 bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.9}}
            animate={{height: variant_1}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.5
            }}
            className=" flex w-1 bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            <motion.div
            initial={{opacity:0.8}}
            animate={{height: variant_2}}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.4
            }}
            className=" flex w-1 bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
            
        </motion.div>
    )
}