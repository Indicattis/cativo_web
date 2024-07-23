import { motion } from "framer-motion"


interface AssessmentsControllers {
    handleChangePage: React.Dispatch<React.SetStateAction<number>>
    length: number,
    activePage: number
}


export default function AssessmentsControllers({handleChangePage, length, activePage }: AssessmentsControllers) {
    return (
        
        <div className="w-full flex justify-start gap-2">
            {Array.from({length: length}).map((page, index) => {
                return (
                    <motion.div 
                    animate={{width: activePage == index ? 56 : 32}}
                    transition={{delay: index * 0.1}}
                    key={`assessment-control-` + index} 
                    onClick={() => handleChangePage(index)}
                    className={`
                        h-2 rounded-full cursor-pointer    !z-[8888]
                    ${activePage == index ? " bg-neon_purple" : " bg-contrast_color_2"}`}>
                    </motion.div>
                )
            })}
        </div>
    )
}