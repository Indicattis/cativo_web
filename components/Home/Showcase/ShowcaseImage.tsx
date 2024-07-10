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
            
            className={`absolute flex justify-end right-0 overflow-hidden   z-0 max-md:rounded-none w-full ${className}`}>
            <Image className={`max-w-screen rounded-[50px]`} width={1000} height={2000} alt="" src={url} />
        </motion.div>
    )
}