
import { motion } from "framer-motion"



export default function ExploreHeader() {
    return (
        
        <motion.div
        key={`CaptationStart-anim`}
        initial={{ x: 1500, position: "absolute" }}
        animate={{ x: 0, position: "initial" }}
        exit={{ x: -1500, position: "absolute" }}
        transition={{
            type: "spring",
            stiffness: 400,
            damping: 50
        }} className="flex flex-col justify-between items-start gap-5 h-full top-0">

        <div className="flex flex-col gap-2 w-full items-center">
            <h1 className="_display_text">Get Started!</h1>
            <p className="_text text-palette_gray">Deseja criar um projeto ou tem alguma ideia em mente?</p>
        </div>
        </motion.div>
    )
}