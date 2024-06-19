import { getColor } from "@/components/utils/getColor";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";




interface SliderProps {
    selectedItem: number;
    setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
    numOfSliders: number;
    data: React.ReactNode[];
    showControllers: boolean;
}


export default function SliderComponent( {selectedItem, setSelectedItem, numOfSliders, data, showControllers}: SliderProps) {

    const navRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (itemId: number) => {
        setSelectedItem(itemId);
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const dragThreshold = 10; // Ajuste o limiar de arrasto conforme necessário
        if (info.offset.x > dragThreshold && selectedItem > 1) {
            setSelectedItem(selectedItem - 1);
        } else if (info.offset.x < -dragThreshold && selectedItem < numOfSliders) {
            setSelectedItem(selectedItem + 1);
        } else if (info.offset.x > dragThreshold && selectedItem === 1) {
            setSelectedItem(numOfSliders); // Se estivermos na primeira página e arrastarmos para a direita, vá para a última página.
        } else if (info.offset.x < -dragThreshold && selectedItem === numOfSliders) {
            setSelectedItem(1); // Se estivermos na última página e arrastarmos para a esquerda, vá para a primeira página.
        }
    };
    

    const variants = {
        hidden: { x: 2000 },
        visible: { x: 0 },
        exit: {
            x: -2000,
            transition: {
                duration: 1,
                delay: 0,
            },
        },
    };




    return (
        <>
            {data.map((item, index) => {
                return (
                    <AnimatePresence key={index + 1}>
                    {selectedItem === index + 1 && (
                        <motion.div
                            key={index + 1}
                            drag="x"
                            onDragEnd={handleDragEnd}
                            variants={variants}
                            dragElastic={0.1}
                            dragSnapToOrigin
                            dragConstraints={{
                                top: 0,
                                left: -30,
                                right: 30,
                                bottom: 0,
                              }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center`}
                        >
                            {/* <Image className="w-full h-full object-cover" priority draggable={false} alt="" src={item.url} width={3000} height={3000}/> */}
                            
                            {item}
                        </motion.div>
                    )}
            </AnimatePresence>
                )
            })}
            {showControllers ? (
            <div className="absolute bottom-0 p-5 flex gap-5 overflow-hidden w-full z-50 items-center justify-center">
                <div ref={navRef} className="relative flex gap-5 overflow-hidden w-full max-w-[1080px] z-50 items-center justify-center">
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
            ) : ""}
        </>
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
        <div
            ref={itemRef}
            onClick={handleClick}
            className={`cursor-pointer z-40 text-xl `}
        >
                <div className={`w-10 h-1 cursor-pointer rounded-full  ${isSelected ? 'bg-white' : 'bg-zinc-400'}`}></div>
        </div>
    );
}
