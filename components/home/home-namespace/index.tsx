'use client'
import { motion } from "framer-motion";



export default function NamespaceComponent() {
    return (
        <div className={`h-1 w-full bg-black relative`}>
            <motion.div
            initial={{color: "#000000"}}
            animate={{color: ["#ffffff", "#000000", "#ffffff"]}}
            transition={{
                duration: 4,
                times: [0, 2, 4],
                repeat: Infinity,
                repeatDelay: 0,
            }}
            className={`h-full w-full`}>

            </motion.div>
        </div>
    )
}

