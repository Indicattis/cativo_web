import getColor from "@/components/utils/getColor";
import Image from "next/image";




interface InterProps {
    color: string;
}

export default function ExhibitionComponent({color}:InterProps ) {
    return (
        <div className={` w-full h-full flex items-center justify-center`}>
            <div className=" w-full h-full flex justify-center items-center max-lg:w-[85%]">
                <Image draggable={false} width={600} height={600} alt="" src={`/img/cativo-logo-2.png`} />
            </div>
        </div>
    )
}