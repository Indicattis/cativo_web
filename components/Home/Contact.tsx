"use client"

import Image from "next/image";
import { Layout } from "../Layouts";
import { Button } from "../utils/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandVercel, IconBrandWhatsapp, IconBuildingEstate, IconMail, IconPointFilled, IconVocabulary } from "@tabler/icons-react";
import { motion } from "framer-motion";
import AnimatedBackground from "./Exhibition/Exhibitions/AnimatedBackground";







export default function ContactComponent() {
    return (
        <Layout.Section id="contact" className=" relative h-screen !z-0">

            <AnimatedBackground content={
                <Layout.Main className="h-full w-full">

                    <Layout.Div className="flex-col w-full gap-10">

                        <div className="w-full flex items-end justify-center gap-3">
                            <div className="flex flex-col h-full justify-around gap-5 w-16">

                            <div className="min-w-16 max-w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-palette_dark to-purple">
                                <Image width={64} height={64} alt="" src={`/img/profile/foto.png`} />
                            </div>
                            
                            <Button.Wide rounded="full" variant="black" wide="xl" onClick={() => window.location.href = "mailto:joao.indicatti@outlook.com?subject=Contato"}>
                                        <Button.Icon icon={<IconMail />} />
                                    </Button.Wide>
                                    <Button.Wide rounded="full" variant="blue" wide="xl" onClick={() => window.location.href = "https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/"}>
                                        <Button.Icon icon={<IconBrandLinkedin />} />
                                    </Button.Wide>
                                    <Button.Wide rounded="full" variant="disabled" wide="xl" onClick={() => window.location.href = "https://github.com/Indicattis"}>
                                        <Button.Icon icon={<IconBrandGithub />} />
                                    </Button.Wide>
                            </div>
                            <div className="bg-contrast_color_2 pl-10 p-8 pb-14 rounded-b-full mt-10 rounded-tr-full w-56 flex flex-col gap-3">
                                <h1 className="_text _display_text">Olá!</h1>
                                <p className="_text">Eu projetei esse site com o intuito de promover meu trabalho como desenvolvedor! Obrigado pela visita!</p>
                            </div>
                        </div>
                        
                        
                        <motion.div
                            initial={{ opacity: 0, y: 145 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -145 }}
                            transition={{
                                delay: 0.5,
                                ease: "easeOut",
                                type: "spring",
                                damping: 30
                            }}
                            className="w-full  flex flex-col justify-center items-start gap-5 overflow-hidden max-md:items-center  rounded-md p-5">
                            {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}
                            <motion.div
                                initial={{ opacity: 0, y: 145 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -145 }}
                                transition={{
                                    delay: 0.9,
                                    ease: "easeOut",
                                    type: "spring",
                                    damping: 30
                                }}
                                className="flex flex-col gap-5 w-full justify-between items-start max-md:items-center "
                            >

                                <div className="flex flex-wrap items-center justify-center w-full gap-2">

                                </div>
                            </motion.div>

                        </motion.div>

                    </Layout.Div>

                </Layout.Main>
            }>
            </AnimatedBackground>
            {/* <div className="absolute  bottom-0 h-48 w-full bg-gradient-to-t from-black to-transparent z-0 "></div> */}
        </Layout.Section>
    )
}