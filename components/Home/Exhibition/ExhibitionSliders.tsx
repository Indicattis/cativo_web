import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";




interface ExhibitionSliderProps {
    selectedItem: number;
    setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
    numOfSliders: number;
    data: ReactNode[]
}


export default function ExhibitionSliders( {selectedItem, setSelectedItem, numOfSliders, data}: ExhibitionSliderProps) {

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
        </>
    )
}
