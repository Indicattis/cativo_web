"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Intro from "./intro";
import { IconBrandTinder, IconHearts, IconQuestionMark } from "@tabler/icons-react";

export default function FaceComponent() {
    const [selectedItem, setSelectedItem] = useState<number>(1);
    const [barPosition, setBarPosition] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const navRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (itemName: number, itemRef: HTMLDivElement) => {
        setSelectedItem(itemName);
        updateBarPosition(itemRef);
    };

    const updateBarPosition = (itemRef: HTMLDivElement) => {
        const navElement = navRef.current;
        if (navElement && itemRef) {
            const navRect = navElement.getBoundingClientRect();
            const itemRect = itemRef.getBoundingClientRect();
            setBarPosition({
                left: itemRect.left - navRect.left,
                width: itemRect.width,
            });
        }
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const dragThreshold = 30; // Ajuste o limiar de arrasto conforme necessário
        const numItems = 3; // Número total de itens
        if (info.offset.x > dragThreshold && selectedItem > 1) {
            setSelectedItem(selectedItem - 1);
        } else if (info.offset.x < -dragThreshold && selectedItem < numItems) {
            setSelectedItem(selectedItem + 1);
        } else if (info.offset.x > dragThreshold && selectedItem === 1) {
            setSelectedItem(numItems); // Se estivermos na primeira página e arrastarmos para a direita, vá para a última página.
        } else if (info.offset.x < -dragThreshold && selectedItem === numItems) {
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
        <section className="_section min-h-[50vh] max-h-[75vh] z-10 relative overflow-hidden">
            <div className="w-full h-[70vh] flex items-center justify-center flex-col">
                <AnimatePresence>
                    {selectedItem === 1 && (
                        <motion.div
                            key="box2"
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
                            className={`absolute top-0 left-0 bg-neon_red w-full h-full flex items-center justify-center`}
                        >
                            Quer namorar comigo Natalia <IconQuestionMark></IconQuestionMark><IconBrandTinder></IconBrandTinder> <IconHearts></IconHearts> <br />
                            
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {selectedItem === 2 && (
                        <motion.div
                            key="box3"
                            drag="x"
                            onDragEnd={handleDragEnd}
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            dragElastic={0.1}
                            dragConstraints={{
                                top: 0,
                                left: -30,
                                right: 30,
                                bottom: 0,
                              }}
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            className={`absolute top-0 left-0 bg-neon_purple w-full h-full flex items-center justify-center`}
                        >
                            <iframe className='video h-full w-full'
                                title='Youtube player'
                                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                src={`https://www.youtube.com/watch?v=abR--H5EzZg`}>
                        </iframe>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {selectedItem === 3 && (
                        <motion.div
                            key="box3"
                            drag="x"
                            onDragEnd={handleDragEnd}
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            dragElastic={0.1}
                            dragConstraints={{
                                top: 0,
                                left: -30,
                                right: 30,
                                bottom: 0,
                              }}
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            className={`absolute top-0 left-0 bg-neon_pink2 w-full h-full flex items-center justify-center`}
                        >
                            <Intro />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute bottom-0 p-5 flex gap-5 overflow-hidden w-full z-50 items-center justify-center">
                    <div ref={navRef} className="relative flex gap-5 overflow-hidden w-full max-w-[1080px] z-50 items-center justify-center">
                        <FaceControllers
                            itemName={1}
                            isSelected={selectedItem === 1}
                            onClick={handleItemClick}
                        />
                        <FaceControllers
                            itemName={2}
                            isSelected={selectedItem === 2}
                            onClick={handleItemClick}
                        />
                        <FaceControllers
                            itemName={3}
                            isSelected={selectedItem === 3}
                            onClick={handleItemClick}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ControllerProps {
    itemName: number;
    isSelected: boolean;
    onClick: (itemName: number, itemRef: HTMLDivElement) => void;
}

function FaceControllers({ itemName, isSelected, onClick }: ControllerProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (itemRef.current) {
            onClick(itemName, itemRef.current);
        }
    };

    return (
        <div
            ref={itemRef}
            onClick={handleClick}
            className={`cursor-pointer z-40 text-xl px-5 mt-1 ${isSelected ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
        >
            {itemName}
        </div>
    );
}
