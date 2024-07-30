"use client"

import { useEffect, useState } from "react";
import { Showcase } from "./Showcase";
import { Showcases } from "@/data/json/showcases";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "../Layouts";
import { Fade } from "@/static/animations";
import LoaderComponent from "../utils/Loader";

export default function ShowcaseComponent() {
    const [activeId, setActiveId] = useState<number>(1);
    const [hover, setHover] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0);

    const itemsPerPage = 1;

    const setItemActive = (id: number) => {
        if (id > Showcases.length) {
            setActiveId(1);
        } else if (id < 1) {
            setActiveId(Showcases.length);
        } else {
            setActiveId(id);
        }

    };


    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (!hover) {
            const startTime = Date.now() - (progress * 100); // Continue from the current progress
            timer = setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                const percentage = (elapsedTime / 10000) * 100;
                setProgress(percentage);

                if (elapsedTime >= 10000) {
                    clearInterval(timer);
                    setItemActive(activeId + 1);
                    setProgress(0);
                }
            }, 100);
        }

        return () => clearInterval(timer);
    }, [hover, activeId, progress]);

    return (
        <Layout.Section
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            id="showcases" className="relative  h-screen">
            <Layout.Main className="h-full">

                <Layout.Div className="">
                    <Showcase.Root className="max-md:flex-col-reverse max-md:justify-center">
                        <Showcase.Content
                            setSelectedItem={setActiveId}
                            numOfSliders={Showcases.length}
                            selectedItem={activeId}
                            data={
                                Showcases.map((item, index) => {
                                    return (
                                        <AnimatePresence
                                            key={`showcase-text-` + index}>
                                            <motion.div
                                                variants={Fade.In}
                                                initial={"start"}
                                                animate={"middle"}
                                                exit={"end"}
                                                key={`showcase-item-text-` + index}
                                                className="flex relative flex-col gap-10 !z-[8888] h-full justify-around"
                                            >
                                                <div className="h-10 flex items-center gap-3">
                                                    <LoaderComponent isPaused={hover} />
                                                    <h1 className=" _display_text text-palette_gray">Sobre</h1>
                                                    <Showcase.Progress progress={progress} />
                                                </div>
                                                <Showcase.Legend legend={item.title} />
                                                <Showcase.Text
                                                    p={item.text}
                                                    isPoused={hover}
                                                    className="gap-3 text-start"
                                                />
                                                <div className="flex flex-wrap gap-3">

                                                {item.tags.map((item, index) => {
                                                    return (
                                                        <Showcase.Tag key={`showcase-tag-`+index} string={item}/>
                                                    )
                                                })}
                                                </div>
                                                <div className="w-full flex items-center justify-center">

                                                    {item.content}
                                                </div>
                                            </motion.div>
                                            {/* <Showcase.Image url={item.url}/> */}
                                        </AnimatePresence>
                                    );
                                })
                            }>
                        </Showcase.Content>
                        <Showcase.Controllers length={Showcases.length} activePage={activeId} />

                    </Showcase.Root>

                    <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-b from-neon_purple to-transparent z-0 opacity-30"></div>
                    <div className="absolute  left-0 h-full w-[50%] bg-gradient-to-r from-black to-transparent z-0 "></div>
                    <div className="absolute  right-0 h-full w-[50%] bg-gradient-to-l from-black to-transparent z-0 "></div>
                    {/* <div className="absolute top-0 z-50 bg-[#0000001a]  w-full h-full flex items-center justify-center">
                        <Showcase.Arrows 
                        isActive={hover}
                        toLeft={() => setItemActive(activeId - 1)}
                        toRight={() => setItemActive(activeId + 1)}
                        />
                    </div> */}
                </Layout.Div>
            </Layout.Main>
            {/* Otimize aqui */}
        </Layout.Section>
    );
}
