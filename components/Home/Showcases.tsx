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

    const itemsPerPage = 1;
    const totalPages = Math.ceil(Showcases.length / itemsPerPage);

    const setItemActive = (id: number) => {
        if (id > Showcases.length) {
            setActiveId(1);
            setCurrentPage(0)
        } else if (id < 1) {
            setActiveId(0);
            setCurrentPage(0)
        } else {
            setCurrentPage(id - 1)
            setActiveId(id);
        }

    };



    return (
        <Layout.Section className="relative  h-screen max-md:h-[800px]">
            <Layout.Main className=" flex w-full h-full items-center justify-center gap-10 flex-col">
                <Layout.Div className=" z-50">

                    <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-b from-black to-transparent z-40"></div>
                    <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-black to-transparent z-40"></div>
                    <Showcase.Root className="max-md:flex-col-reverse max-md:justify-center">
                        <Showcase.Content>
                            {Showcases.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => {
                                return (
                                    <AnimatePresence
                                        key={index}>
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
                                        >
                                            <Showcase.Text
                                                itemActive={activeId == item.id}
                                                id={item.id}
                                                setItemActive={setItemActive}
                                                h1={item.title}
                                                key={`showcase-text-${item.id}`}
                                                p={item.text}
                                                className="gap-3 text-start"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                );
                            })}
                            <Showcase.Controllers handleChangePage={setCurrentPage} length={totalPages} activePage={currentPage} />
                        </Showcase.Content>

                    </Showcase.Root>

                </Layout.Div>
            </Layout.Main>
            <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-black to-transparent z-0 "></div>
            <div className="absolute  left-0 h-full w-[50%] bg-gradient-to-r from-black to-transparent z-0 "></div>
            <div className="absolute  right-0 h-full w-[50%] bg-gradient-to-l from-neon_purple to-transparent z-0 "></div>
            {/* Otimize aqui */}
            <AnimatePresence >
                {activeId > 0 && activeId <= Showcases.length && (
                    <Showcase.Image key={`showcase-image-${activeId}`} url={Showcases[activeId - 1]?.url} />
                )}
                </AnimatePresence>
        </Layout.Section>
    );
}
