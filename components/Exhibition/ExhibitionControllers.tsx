import { useRef } from "react";
import { motion } from "framer-motion";


interface ExhibitionControllersProps {
    data: React.ReactNode[];
    selectedItem: number
    handleItemClick: (id: number) => void
}


export default function ExhibitionControllers({data, selectedItem, handleItemClick}:ExhibitionControllersProps ) {
    const navRef = useRef<HTMLDivElement>(null);
    return (
        
            <div className="absolute bottom-0 flex gap-5 overflow-hidden w-full max-w-[1080px] p-5 z-50 items-start justify-start">
                <div ref={navRef} className="relative flex gap-2 overflow-hidden w-full max-w-[1080px] z-50 items-start justify-start">
                    {data.map((item, index) => {
                        return (
                            <FaceControllers
                                key={index}
                                itemID={index+1}
                                isSelected={selectedItem === index+1}
                                onClick={() => handleItemClick(index+1)}
                            />
                        )
                    })}
                </div>
            </div>
    )
}




interface ControllerProps {
    itemID: number;
    isSelected: boolean;
    onClick: (itemName: number, itemRef: HTMLDivElement) => void;
}

function FaceControllers({ itemID, isSelected, onClick }: ControllerProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (itemRef.current) {
            onClick(itemID, itemRef.current);
        }
    };

    return (
        <motion.div
            ref={itemRef}
            onClick={handleClick}
            className={`cursor-pointer z-40 text-xl `}
            animate={{width: isSelected ? 56 : 32}}
        >
                <div className={` h-2 cursor-pointer rounded-full  ${isSelected ? 'bg-neon_purple' : 'bg-purple'}`}></div>
        </motion.div>
    );
}
