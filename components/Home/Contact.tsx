"use client"

import Image from "next/image";
import { Layout } from "../Layouts";
import { Button } from "../utils/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandVercel, IconBrandWhatsapp, IconBuildingEstate, IconMail, IconPointFilled, IconVocabulary } from "@tabler/icons-react";
import { motion } from "framer-motion";
import AnimatedBackground from "./Exhibition/Exhibitions/AnimatedBackground";







export default function ContactComponent() {
    return (
        <Layout.Section id="contact" className="bg-neon_purple h-[500px] relative  !z-0">

            <AnimatedBackground content={
                <Layout.Main className="h-full w-full">

                    <Layout.Div className="flex-col w-full gap-10">

                        <div className="w-full flex gap-3">
                            <div className="min-w-20 w-20 h-20 rounded-full overflow-hidden border-2 shadow-lg shadow-palette_dark">
                                <Image width={100} height={100} alt="" src={`/img/profile/indicatti.jpg`} />
                            </div>
                            <div className="bg-purple p-3 rounded-r-2xl rounded-t-2xl shadow-lg shadow-palette_dark">
                                <div className="_text">Olá</div>
                                <div className="_text">Deseja entrar em contato profissionalmente comigo? Veja as opções abaixo!</div>
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

                                <div>
                                    <h1 className="_display_text">Contato Profissional</h1>
                                </div>
                                <div className="flex flex-wrap gap-2">

                                    <Button.Wide rounded="md" variant="black" wide="lg" onClick={() => window.location.href = "mailto:joao.indicatti@outlook.com?subject=Contato"}>
                                        <Button.Text text="Enviar e-mail" />
                                        <Button.Icon icon={<IconMail />} />
                                    </Button.Wide>
                                    <Button.Wide rounded="md" variant="green" wide="lg" onClick={() => window.location.href = "https://wa.me/5554996598024"}>
                                        <Button.Text text="Enviar mensagem" />
                                        <Button.Icon icon={<IconBrandWhatsapp />} />
                                    </Button.Wide>
                                    <Button.Wide rounded="md" variant="blue" wide="lg" onClick={() => window.location.href = "https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/"}>
                                        <Button.Text text="Linkedin" />
                                        <Button.Icon icon={<IconBrandLinkedin />} />
                                    </Button.Wide>
                                    <Button.Wide rounded="md" variant="red" wide="lg" onClick={() => window.location.href = "https://www.instagram.com/indicatti_s/"}>
                                        <Button.Text text="Instagram" />
                                        <Button.Icon icon={<IconBrandInstagram />} />
                                    </Button.Wide>
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