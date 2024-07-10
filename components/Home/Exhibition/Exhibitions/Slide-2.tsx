import LayoutDiv from "@/components/Layouts/LayoutDiv";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutSection from "@/components/Layouts/LayoutSection";
import { Button } from "@/components/utils/Button";
import { IconBrandGithub, IconBrandLinkedin, IconBrandVercel, IconBuildingEstate, IconPointFilled, IconVocabulary } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";

export default function Slider_2() {

    return (
        <LayoutSection className="h-screen w-full">
            <AnimatedBackground content={
                <LayoutMain className="h-full w-full">
                    <LayoutDiv className=" w-full">

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
                            className="w-full  flex flex-col justify-center items-start gap-5 overflow-hidden max-md:items-center bg-palette_dark  rounded-md p-5">
                            {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}
                            <motion.div
                                initial={{ opacity: 0, y: 145 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -145 }}
                                transition={{
                                    delay: 0.7,
                                    ease: "easeOut",
                                    type: "spring",
                                    damping: 30
                                }}
                                className="relative flex flex-col w-full max-md:text-center gap-5"
                            >
                                <h1 className="_display_text _biggest">
                                    <span className="text-neon_purple">Per</span>fil
                                </h1>
                                <div className="flex flex-col gap-3">
                                    <div className=" p-3 border border-contrast_color_2 rounded-md">
                                        <p className="_text flex gap-3 items-center">
                                            <IconPointFilled className="text-contrast_color_3"></IconPointFilled>
                                            <span className="text-white">23 anos</span>
                                        </p>
                                        <p className="_text flex gap-3 items-center">
                                            <IconPointFilled className="text-contrast_color_3"></IconPointFilled>
                                            <span className="text-white">Brasileiro</span>
                                        </p>
                                    </div>
                                    <div className=" p-3 border border-contrast_color_2 rounded-md">
                                        <p className="_text flex gap-3 items-center">
                                            <IconBuildingEstate className="text-contrast_color_3"></IconBuildingEstate>
                                            <span className="text-white">Desenvolvedor Front end</span>
                                        </p>
                                        <p className="_text flex gap-3 items-center">
                                            <IconBuildingEstate className="text-contrast_color_3"></IconBuildingEstate>
                                            <span className="text-white">Analista de Sistemas</span>
                                        </p>
                                        <p className="_text flex gap-3 items-center">
                                            <IconBuildingEstate className="text-contrast_color_3"></IconBuildingEstate>
                                            <span className="text-white">Analista de Infraestrutura</span>
                                        </p>
                                    </div>
                                    <div className=" p-3 border border-contrast_color_2 rounded-md">
                                        <p className="_text flex gap-3 items-center">
                                            <IconVocabulary className="text-contrast_color_3"></IconVocabulary>
                                            <span className="text-white">Bacharelado em Cências da Computação</span>
                                        </p>
                                        <p className="_text flex gap-3 items-center">
                                            <IconVocabulary className="text-contrast_color_3"></IconVocabulary>
                                            <span className="text-white">Curso Técnico em TI</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
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
                                className="flex w-full justify-between items-start max-md:items-center "
                            >

                                <Button.Wide wide="md" rounded="md" variant="default">
                                    <Button.Text text="Contato profissional" />
                                </Button.Wide>
                                <div className="flex  gap-2">

                                    <Button.Wide wide="md" rounded="md" variant="disabled">
                                        <Button.Icon icon={<IconBrandGithub />} />
                                    </Button.Wide>

                                    <Button.Wide wide="md" rounded="md" variant="blue">
                                        <Button.Icon icon={<IconBrandLinkedin />} />
                                    </Button.Wide>

                                    <Button.Wide wide="md" rounded="md" variant="black">
                                        <Button.Icon icon={<IconBrandVercel />} />
                                    </Button.Wide>
                                </div>
                            </motion.div>

                        </motion.div>

                    </LayoutDiv>

                </LayoutMain>
            }>
            </AnimatedBackground>
        </LayoutSection>
    );
}
