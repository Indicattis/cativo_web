"use client"

import { useState } from "react";
import { Showcase } from "./Showcase";
import { Showcases } from "@/data/json/showcases";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Layout } from "../Layouts";

export default function ShowcaseComponent() {
    const [activeId, setActiveId] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [hover, setHover] = useState<boolean>(false)

    const itemsPerPage = 1;
    const totalPages = Math.ceil(Showcases.length / itemsPerPage);

    const setItemActive = (id: number) => {
        if (id > Showcases.length) {
            setActiveId(1);
            setCurrentPage(0)
        } else if (id < 1) {
            setActiveId(Showcases.length);
            setCurrentPage(Showcases.length -1)
        } else {
            setCurrentPage(id - 1)
            setActiveId(id);
        }

    };



    return (
        <Layout.Section 
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        id="showcases" className="relative  h-screen">
                <Layout.Div className=" z-50">
                    <Showcase.Root className="max-md:flex-col-reverse max-md:justify-center">
                        <Showcase.Content>
                            {Showcases.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => {
                                return (
                                    <AnimatePresence
                                        key={`showcase-text-`+index}>
                                        <motion.div
                                            initial={{ x: -600 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: -600 }}
                                            transition={{
                                                delay: index * 0.1,
                                                type: "spring",
                                                damping: 30
                                            }}
                                            key={index}
                                            className="flex relative  !z-[8888]"
                                        >
                                            <Showcase.Text
                                                itemActive={activeId == item.id}
                                                id={item.id}
                                                setItemActive={setItemActive}
                                                h1={item.title}
                                                key={`showcase-text-${item.id}`}
                                                p={item.text}
                                                isPoused={hover}
                                                className="gap-3 text-start"
                                            />
                                        </motion.div>
                                        <Showcase.Image key={`showcase-image-${activeId}`} url={item.url} />
                                    </AnimatePresence>
                                );
                            })}
                            <Showcase.Controllers handleChangePage={setCurrentPage} length={totalPages} activePage={currentPage} />
                        </Showcase.Content>

                    </Showcase.Root>

                    <div className="absolute bottom-0 z-50 bg-gradient-to-t from-[#000000ad] to-[#00000036] w-full h-full flex items-center justify-center">
                        <Showcase.Arrows 
                        isActive={hover}
                        toLeft={() => setItemActive(activeId - 1)}
                        toRight={() => setItemActive(activeId + 1)}
                        />
                    </div>
                </Layout.Div>
            {/* Otimize aqui */}
        </Layout.Section>
    );
}
