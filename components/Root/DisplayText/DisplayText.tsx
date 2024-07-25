import { Slide } from "@/static/animations"
import { AnimatePresence, motion } from "framer-motion"


interface DisplayTextProps {
    text: string,
    isActive: boolean
}



export default function DisplayText({ isActive, text }: DisplayTextProps) {
    return (
        isActive && (
            <AnimatePresence>
                <motion.h1
                    key={`display-text`}
                    variants={Slide.ToDown}
                    initial={"start"}
                    animate={"middle"}
                    exit={"end"}

                    className="_text font-bold">
                    {text}
                </motion.h1>
            </AnimatePresence>
        )
    )
}