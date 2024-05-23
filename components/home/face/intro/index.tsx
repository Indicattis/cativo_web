import Image from "next/image";




interface InterProps {
    color?: string;
}

export default function Intro({color}:InterProps ) {
    return (
        <div className={` w-full h-full flex items-center justify-center
        ${color == "red" ? "bg-neon_red" : ""}
        ${color == "purple" ? "bg-neon_purple" : ""}
        ${color == "blue" ? "bg-neon_blue" : ""}
        ${color == "black" ? "bg-neon_black" : ""}
        `
        }>
            <div className=" w-full h-full flex justify-center items-center">
                <Image width={600} height={600} alt="" src={`/img/cativo-logo.png`} />
            </div>
        </div>
    )
}