import Image from "next/image"

type ImageType = {
    url: string
    className?: string
    wide: number
}

export default function StaticImage({ url, className, wide }: ImageType) {
    return (
        <div
            style={{
                width: wide,
            }}
            className={` absolute  overflow-hidden  max-lg:w-[400px] ${className}`}>
            <Image width={2000} height={2000} alt="" src={url} />
        </div>
    )
}