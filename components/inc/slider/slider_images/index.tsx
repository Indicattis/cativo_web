import { IconPlayerPause } from "@tabler/icons-react";
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
        <motion.div 
        className="h-screen w-screen flex flex-col justify-center relative">
            {data.map((item, index) => {
                return (
                    <AnimatePresence 
                    key={item.id}>
                    {selectedItem === index && (
                        <motion.div
                            key={item.id}
                            drag="x"
                            onDragEnd={handleDragEnd}
                            variants={variants}
                            dragElastic={0.1}
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                              }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center z-[9999]`}
                        >
                                <Image draggable={false} alt="" src={item} width={1000} height={1000}/>
                        </motion.div>
                    )}
            </AnimatePresence>
                )
            })}
            {showControllers ? (
            <div className="absolute bottom-20 p-5 flex gap-5 overflow-hidden w-full z-[9999] items-center justify-center">
                
            <div ref={navRef} className="flex gap-1 justify-center items-center w-full z-[9999]">
              {data.map((image: any, index: number) => {
                return (
                  <div
                    key={image}
                    className={` h-full flex justify-center items-center bg-gray p-1  cursor-pointer ${
                      index == selectedItem ? "opacity-100" : "opacity-65"
                    }`}
                    onClick={() => setSelectedItem(index)}
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
              })}
              
            </div>
            </div>
            ) : ""}
        </motion.div>
    )
}


