"use client"

import LayoutDiv from "@/components/Layouts/LayoutDiv";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutSection from "@/components/Layouts/LayoutSection";
import { Button } from "@/components/utils/Button";
import { IconBrandAws, IconBrandJavascript, IconBrandNodejs, IconBrandPhp, IconBrandReact, IconBrandSass, IconBrandTailwind, IconBrandTypescript, IconCloud, IconDatabase, IconFileTypeSql } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Slider_1() {


    const duration = 10
    const times = [0, 0.5, 1]
    const opacity = [.3, 1, .2, .1, .3, 1, .4]

    const onUpAnimation = {
        y: [380, -380],
        opacity: [0, 1],
    }
    return (
        <LayoutSection className="h-full w-full">
            <LayoutMain className="h-full w-full !px-0">
                <LayoutDiv className="h-full w-full flex flex-col">

                    {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}

                    <motion.div
                        className={`relative w-full py-5 overflow-hidden  flex justify-center items-center transition-all z-10 max-md:flex-col gap-5`}
                    >
                        <motion.div
                            initial={{ y: 400 }}
                            animate={{
                                y: 0,
                            }}
                            transition={{
                                y: {
                                    duration: 0.2,
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 600,
                                    damping: 130,
                                },
                            }}
                            className="relative w-full flex justify-center items-center z-20">

                            <div className="rounded-full bg-gradient-to-r from-contrast_color_2 to-purple max-h-56 max-w-56 overflow-hidden">

                                <Image
                                    className=""
                                    alt=""
                                    draggable={false}
                                    width={1000}
                                    height={1000}
                                    src={`/img/profile/foto.png`}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ opacity: opacity, width: "100vw" }}
                            transition={{
                                opacity: {
                                    duration: duration,
                                    times: times,
                                    easing: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                },
                                width: {
                                    duration: 1,
                                    easing: "easeInOut",
                                    delay: .2
                                }
                            }}
                            className="absolute bottom-0  z-0 bg-gradient-to-t from-neon_purple w-full h-24 border-b-2 border-neon_pink2">

                        </motion.div>
                        <motion.div className="absolute  left-0 z-10 bg-gradient-to-r from-black w-96 h-full">
                        </motion.div>
                        <motion.div className="absolute  right-0 z-10 bg-gradient-to-l from-black w-96 h-full">
                        </motion.div>

                        <motion.div
                            className="relative overflow-hidden flex flex-col items-center justify-center gap-2 w-full z-20"
                        >
                            <motion.div
                                className="text-center"
                                initial={{ y: -400, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    y: {
                                        duration: 0.2,
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 130,
                                    },
                                }}>

                                <h1 className="_display_text _biggest text-wrap text-center">
                                    Olá! Eu sou um <span className="text-neon_purple">Desenvolvedor</span>
                                </h1>
                                <p className="_text">
                                    <span className="text-white font-bold">João Pedro Indicatti</span> -
                                    Frontend Developer{" "}
                                </p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 400 }}
                            animate={{
                                y: 0,
                            }}
                            transition={{
                                y: {
                                    duration: 0.2,
                                    delay: 0.6,
                                    type: "spring",
                                    stiffness: 600,
                                    damping: 130,
                                },
                            }}
                            className="flex flex-col w-full justify-center items-center gap-3  z-20"
                        >

                            <Button.Wide wide="xl" rounded="lg" variant="purple" onClick={() => window.location.href = "#captation"}>
                                <Button.Text text="Contratar!" />
                            </Button.Wide>
                        </motion.div>


                        <div className="absolute w-full h-full flex items-center justify-center z-10">
                            <div className="relative w-20 h-20">
                                <AnimatePresence>
                                    <motion.div
                                        key={`IconBrandTypescript`}
                                        initial={{ x: 490, opacity: 0 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            duration: 4,
                                            ease: "easeInOut",
                                            times: times,
                                            repeat: Infinity,
                                            repeatDelay: 0,
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-3 ">
                                        <IconBrandTypescript className="text-contrast_color_1" width={25} height={25} />
                                    </motion.div>

                                    <motion.div
                                        key={`IconFileTypeSql`}
                                        initial={{ x: 290 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 7,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: .8,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-3 ">
                                        <IconFileTypeSql className="text-contrast_color_1" width={20} height={20} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandJavascript`}
                                        initial={{ x: -490 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 3,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 1,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-4 ">
                                        <IconBrandJavascript className="text-contrast_color_1" width={30} height={30} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandReact`}
                                        initial={{ x: -205 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 9,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 1.2,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-5 ">
                                        <IconBrandReact className="text-contrast_color_1" width={50} height={50} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandNodejs`}
                                        initial={{ x: 220 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 5,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 1.4
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-5 ">
                                        <IconBrandNodejs className="text-contrast_color_1" width={40} height={40} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandAws`}
                                        initial={{ x: -390 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 7,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 1.6
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-3 ">
                                        <IconBrandAws className="text-contrast_color_1" width={24} height={24} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconCloud`}
                                        initial={{ x: 390 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 3,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 1.8,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-2 ">
                                        <IconCloud className="text-contrast_color_1" width={15} height={15} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandPhp`}
                                        initial={{ x: 20 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 12,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 2,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-4 ">
                                        <IconBrandPhp className="text-contrast_color_1" width={32} height={32} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconDatabase`}
                                        initial={{ x: -70 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 3,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 2.2,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-3 ">
                                        <IconDatabase className="text-contrast_color_1" width={27} height={27} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandTailwind`}
                                        initial={{ x: 160 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 5,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 2.4,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-3 ">
                                        <IconBrandTailwind className="text-contrast_color_1" width={27} height={27} />
                                    </motion.div>
                                    <motion.div
                                        key={`IconBrandSass`}
                                        initial={{ x: 160 }}
                                        animate={onUpAnimation}
                                        transition={{
                                            y: {
                                                duration: 9,
                                                ease: "easeInOut",
                                                times: times,
                                                repeat: Infinity,
                                                repeatDelay: 0,
                                                delay: 2.6,
                                            }
                                        }}
                                        className="absolute bg-gradient-to-r from-contrast_color_2 to-purple rounded-full p-3 ">
                                        <IconBrandSass className="text-contrast_color_1" width={18} height={18} />
                                    </motion.div>
                                </AnimatePresence>

                            </div>
                        </div>
                    </motion.div>

                </LayoutDiv>

            </LayoutMain>
        </LayoutSection>
    );
}
