import { motion } from "framer-motion"


interface ShowcaseControllers {
    length: number,
    activePage: number
}


export default function ShowcaseControllers({length, activePage }: ShowcaseControllers) {
    return (
        
        <div className="w-full flex justify-start gap-2">
            {Array.from({length: length}).map((page, index) => {
                return (
                    <motion.div 
                    animate={{width: activePage == index ? 56 : 32}}
                    transition={{delay: index * 0.1}}
                    key={`showcase-control-` + index} 
                    className={`
                        h-2 rounded-full !z-[8888]
                    ${activePage == index ? " bg-neon_purple" : " bg-contrast_color_2"}`}>
                    </motion.div>
                )
            })}
        </div>
    )
}