import Image from "next/image"
import { motion } from "framer-motion"
type ImageType = {
    url: string
    className?: string
}

export default function ShowcaseImage({ url, className }: ImageType) {
    return (
        <motion.div
        initial={{x: 250, opacity: 0, scale: 0.6}}
        animate={{x: 0, opacity: 1, scale: 1}}
        exit={{x: -250, opacity: 0, scale: 0.6}}
        transition={{
            duration: .6,
            type: "spring",
        }}
            
            className={`absolute w-full top-0 left-0 h-full overflow-hidden  flex items-center justify-center  z-0   ${className}`}>
            <Image className={` min-w-[1920px]`} width={3000} height={1080} alt="" src={url} />
        </motion.div>
    )
}