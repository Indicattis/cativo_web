'use client'

import { useState } from "react";
import PortifolioShowcase from "./showcase";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import projects_array from "@/data/json/projects";

interface PortifolioProps {
    data: ProjectDTO[]
}

export default function PortifolioComponent({data}: PortifolioProps) {
    const [selectedItem, setSelectedItem] = useState<ProjectDTO>(projects_array[0]);

    const handleClick = (item: ProjectDTO) => {
        setSelectedItem(item);
    };

    return (
        <section className="_section relative overflow-hidden mt-10">
            <div className="flex flex-col gap-10 items-center">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        top: 0,
                        left: -330,
                        right:330,
                        bottom: 0,
                    }}
                    dragElastic={1}
                    className="flex gap-5 w-full justify-center"
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0}}
                            transition={{
                                delay: index/5
                            }}
                            onClick={() => handleClick(item)}
                            className={`relative cursor-pointer p-2 flex items-center justify-center w-[200px] h-[120px]`}
                        >
                            <div className={`absolute bg-dark w-[90%] h-[90%] rounded-3xl overflow-hidden transition-all 
                                ${selectedItem == item ? "top-0" : "top-3"}`}>
                                    <Image draggable={false} width={200} height={120} src={item.logo} alt={`teste`} />
                                </div>
                                {selectedItem == item ? (
                                    <motion.div 
                                    initial={{scale: 0}}
                                    animate={{scale: 1}}
                                    exit={{scale: 0}}
                                    className={`absolute w-full h-[93%] rounded-3xl top-2 z-[-1]  shadow-lg shadow-gray 
                                    
                                    ${item.theme == "neon_green2" ? "bg-neon_green2" : ""}
                                    ${item.theme == "neon_red" ? "bg-gradient-to-tr from-neon_red to-neon_pink" : ""}
                                    ${item.theme == "neon_purple" ? "bg-gradient-to-tr from-neon_purple to-neon_blue" : ""}
                                    ${item.theme == "neon_blue" ? "bg-neon_blue" : ""}
                                    ${item.theme == "neon_green" ? "bg-neon_green" : ""}
                                    ${item.theme == "neon_pink" ? "bg-neon_pink" : ""}
                                    ${item.theme == "" ? "bg-dark" : ""}`}></motion.div>
                                ) : ""}
                        </motion.div>
                    ))}
                </motion.div>
                
                <div className="flex items-center justify-center h-[500px]">
                    <AnimatePresence>
                        {selectedItem && (
                            <motion.div 
                            key={selectedItem.id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute">
                                <PortifolioShowcase wide="lg" theme={selectedItem.theme} url={selectedItem.url} />
                            </motion.div>

                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
