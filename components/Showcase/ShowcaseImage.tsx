import Image from "next/image"
import { motion } from "framer-motion"
type ImageType = {
    url: string
    className?: string
    wide: number
    key: string
}

export default function ShowcaseImage({ url, className, wide, key }: ImageType) {
    return (
        <motion.div
        initial={{x: 250, opacity: 0, scale: 0.6}}
        animate={{x: 0, opacity: 1, scale: 1}}
        exit={{x: -250, opacity: 0, scale: 0.6}}
        transition={{
            duration: .6,
            type: "spring",
        }}
            style={{
                width: wide,
            }}
            className={`absolute right-0 max-md:w-full overflow-hidden max-md:top-96 ${className}`}>
            <Image width={wide} height={wide} alt="" src={url} />
        </motion.div>
    )
}