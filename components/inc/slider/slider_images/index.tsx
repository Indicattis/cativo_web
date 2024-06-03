import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";




interface SliderProps {
    selectedItem: number;
    setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
    numOfSliders: number;
    data: any[];
    showControllers?: boolean;
}


export default function SliderImagesComponent( {selectedItem, setSelectedItem, numOfSliders, data, showControllers}: SliderProps) {

    const navRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (itemId: number) => {
        setSelectedItem(itemId);
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const dragThreshold = 1; // Ajuste o limiar de arrasto conforme necessário
        if (info.offset.x > dragThreshold && selectedItem > 0) {
            setSelectedItem(selectedItem - 1);
        } else if (info.offset.x < -dragThreshold && selectedItem < numOfSliders) {
            setSelectedItem(selectedItem + 1);
        } else if (info.offset.x > dragThreshold && selectedItem === 0) {
            setSelectedItem(numOfSliders); // Se estivermos na primeira página e arrastarmos para a direita, vá para a última página.
        } else if (info.offset.x < -dragThreshold && selectedItem === numOfSliders) {
            setSelectedItem(0); // Se estivermos na última página e arrastarmos para a esquerda, vá para a primeira página.
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
        <div className="h-full">
            {data.map((item, index) => {
                return (
                    <AnimatePresence key={index + 1}>
                    {selectedItem === index && (
                        <motion.div
                            key={index + 1}
                            drag="x"
                            onDragEnd={handleDragEnd}
                            variants={variants}
                            dragElastic={0.1}
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
                            className={`absolute top-0 left-0 bg-${item.theme} w-full h-full flex items-center justify-center`}
                        >
                                <Image draggable={false} alt="" src={item} width={1000} height={1000}/>
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
                                image={item.image}
                                isSelected={selectedItem === item.id}
                                onClick={() => handleItemClick(item.id)}
                            />
                        )
                    })}
                </div>
            </div>
            ) : ""}
        </div>
    )
}




interface ControllerProps {
    image: string;
    isSelected: boolean;
    onClick: (image: string, itemRef: HTMLDivElement) => void;
}

function FaceControllers({ image, isSelected, onClick }: ControllerProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (itemRef.current) {
            onClick(image, itemRef.current);
        }
    };

    return (
        <div
        ref={itemRef}
        className={`w-full h-full flex justify-center items-center cursor-pointer ${
            isSelected ? "opacity-100" : "opacity-50"
        }`}
        onClick={handleClick}
      >
        <Image
          draggable={false}
          alt=""
          src={image}
          width={100}
          height={100}
        />
      </div>
    );
}
