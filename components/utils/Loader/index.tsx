
import { AnimatePresence, motion } from 'framer-motion'

import React, { useEffect, useState } from 'react'

interface LoaderComponentProps {
    isPaused: boolean
}

function LoaderComponent({isPaused}: LoaderComponentProps) {
    const [heightVariants, setHeightVariants] = useState<number[]>([20, 30, 20, 30, 20, 30, 20])

    const duration = 5
    const times = [0, 3, 5]

    useEffect(() => {
        if (isPaused) {
            setHeightVariants([5, 4, 5, 4, 5, 4, 5])
        } else {
            setHeightVariants([20, 30, 20, 30, 20, 30, 20])
        }
    }, [isPaused])


    return (
        <div className='flex gap-2 items-center'>  
        <AnimatePresence >
        <motion.div
        key={`loader-bar-1`}
            animate={{ height: heightVariants }}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
                delay: 0.6
            }}
            className="flex w-1 bg-neon_purple rounded-full shadow-lg shadow-neon_purple"></motion.div>
        </AnimatePresence>          
            
            <motion.div
                animate={{ height: isPaused ? heightVariants : [25, 40, 25, 40, 25, 40, 25] }}
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
                animate={{ height: heightVariants }}
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