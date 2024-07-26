
import { motion } from 'framer-motion'

import React from 'react'

function LoaderComponent() {

    const duration = 5
    const times = [0, 3, 5]
    const variant_1 = [25, 40, 25, 40, 25, 40, 25]
    const variant_2 = [20, 30, 20, 30, 20, 30, 20]


    return (
        <div className='flex gap-2 items-center'>            
            <motion.div
            initial={{ opacity: 1 }}
            animate={{ height: variant_2 }}
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
                initial={{ opacity: 0.9 }}
                animate={{ height: variant_1 }}
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
                initial={{ opacity: 0.8 }}
                animate={{ height: variant_2 }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    times: times,
                    repeat: Infinity,
                    repeatDelay: 0,
                    delay: 0.4
                }}
                className=" flex w-1 bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
        </div>
    )
}

export default LoaderComponent