'use client'

import { useState, useRef } from "react";
import PortifolioShowcase from "./showcase";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import projects_array from "@/data/json/projects";
import MobileShowcase from "./showcase/mobile";

interface PortifolioProps {
    data: ProjectDTO[];
}

export default function PortifolioComponent({ data }: PortifolioProps) {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(2);

    const handleSwipe = (direction: string) => {
        if (direction === "left" && selectedItemIndex < data.length - 1) {
            setSelectedItemIndex(selectedItemIndex + 1);
        } else if (direction === "right" && selectedItemIndex > 0) {
            setSelectedItemIndex(selectedItemIndex - 1);
        }
    };

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };

    const renderItems = () => {
        const startIndex = Math.max(0, selectedItemIndex - 1);
        const endIndex = Math.min(data.length - 1, startIndex + 2);

        return data.slice(startIndex, endIndex + 1).map((item, index) => (
            <motion.div
                key={startIndex + index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }} //Math.abs(selectedItemIndex - index) / 5
                onClick={() => handleItemClick(startIndex + index)}
                className={`relative cursor-pointer p-2 flex items-center justify-center w-[200px] h-[120px] max-md:w-[120px] max-md:h-[60px]`}
            >
                <div
                    className={`absolute bg-dark w-[90%] h-[90%] rounded-3xl overflow-hidden transition-all ${
                        selectedItemIndex === startIndex + index ? "top-0" : "top-3"
                    }`}
                >
                    <Image draggable={false} width={200} height={120} src={item.logo} alt={`teste`} />
                </div>
                {selectedItemIndex === startIndex + index && (
                    <AnimatePresence>
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className={`absolute w-full h-[93%] rounded-3xl top-2 z-[-1] shadow-lg shadow-gray ${
                                item.theme === "neon_green2"
                                    ? "bg-neon_green2"
                                    : item.theme === "neon_red"
                                    ? "bg-gradient-to-tr from-neon_red to-neon_pink"
                                    : item.theme === "neon_purple"
                                    ? "bg-gradient-to-tr from-neon_purple to-neon_blue"
                                    : item.theme === "neon_blue"
                                    ? "bg-neon_blue"
                                    : item.theme === "neon_green"
                                    ? "bg-neon_green"
                                    : item.theme === "neon_pink"
                                    ? "bg-neon_pink"
                                    : "bg-dark"
                            }`}
                        />
                    </AnimatePresence>
                )}
            </motion.div>
        ));
    };

    return (
        <section className="_section relative overflow-hidden mt-10">
            <div className="flex flex-col gap-10 items-center w-full">
                <h1 className="text-3xl">Explore!</h1>
                <motion.div className="flex gap-5 justify-center">{renderItems()}</motion.div>

                <div className="flex items-center justify-center h-[500px]">
                    <AnimatePresence>
                        {selectedItemIndex >= 0 && (
                            <motion.div
                                key={selectedItemIndex}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute"
                            >
                                <PortifolioShowcase
                                    wide="lg"
                                    theme={data[selectedItemIndex].theme}
                                    url={data[selectedItemIndex].url}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div
                    className={`flex gap-5 p-3 w-full items-center justify-center h-full ${
                        data[selectedItemIndex]?.theme === "neon_green2"
                            ? "bg-neon_green2"
                            : data[selectedItemIndex]?.theme === "neon_red"
                            ? "bg-gradient-to-tr from-neon_red to-neon_pink"
                            : data[selectedItemIndex]?.theme === "neon_purple"
                            ? "bg-gradient-to-tr from-neon_purple to-neon_blue"
                            : data[selectedItemIndex]?.theme === "neon_blue"
                            ? "bg-neon_blue"
                            : data[selectedItemIndex]?.theme === "neon_green"
                            ? "bg-neon_green"
                            : data[selectedItemIndex]?.theme === "neon_pink"
                            ? "bg-neon_pink"
                            : "bg-dark"
                    }`}
                >
                    <AnimatePresence>
                        {data[selectedItemIndex]?.subimages.map((subimage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0 }}
                                transition={{ delay: index / 10 }}
                            >
                                <MobileShowcase key={index} wide="mobile" theme={``} url={subimage} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
