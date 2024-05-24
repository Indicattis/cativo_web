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
                    // drag="x"
                    // dragConstraints={{
                    //     top: 0,
                    //     left: -130,
                    //     right: 130,
                    //     bottom: 0,
                    // }}
                    className="flex gap-5 w-full justify-center"
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleClick(item)}
                            className={`relative cursor-pointer p-2 flex items-center justify-center w-[200px] h-[120px]`}
                        >
                            <div className={`absolute bg-dark w-[90%] h-[90%] rounded-3xl overflow-hidden transition-all shadow-lg shadow-gray 
                                ${selectedItem == item ? "top-6" : "top-0"}`}>
                                    <Image width={200} height={120} src={item.logo} alt={`teste`} />
                                </div>
                            <div className={`absolute w-full h-[93%] rounded-3xl top-2 z-[-1]  bg-${item.theme}`}></div>
                        </motion.div>
                    ))}
                </motion.div>
                
                <div className="flex items-center justify-center">
                    {selectedItem && (
                        <PortifolioShowcase wide="lg" theme={selectedItem.theme} url={selectedItem.url} />
                    )}
                    
                </div>
            </div>
        </section>
    )
}
