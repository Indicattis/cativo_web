import Image from "next/image"



interface CardImageProps {
    url: string
}



export default function CardImage({url}: CardImageProps) {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-10">
            <Image alt="" src={url} width={387} height={387}/>
        </div> 
    )
}