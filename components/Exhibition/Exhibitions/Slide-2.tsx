import LayoutDiv from "@/components/Layouts/LayoutDiv";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutSection from "@/components/Layouts/LayoutSection";
import { Button } from "@/components/utils/Button";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";

export default function Slider_2() {

    return (
        <LayoutSection className="h-full w-full">
            <AnimatedBackground content={
                <LayoutMain className="h-full w-full">
                    <LayoutDiv className="h-full w-full max-md:flex-col-reverse bg-palette_dark p-5 rounded-3xl">

                        <div className="w-full h-full flex flex-col justify-center items-start gap-5 overflow-hidden max-md:items-center">
                            {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}
                            <motion.div
                                initial={{ x: -400 }}
                                animate={{
                                    x: 0,
                                }}
                                transition={{
                                    x: {
                                        duration: 0.2,
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 130,
                                    },
                                }}
                                className="relative flex flex-col w-full max-md:text-center"
                            >
                                <h1 className="_display_text _biggest text-wrap max-md:text-[20px]">
                                    <span className="text-neon_purple">+ 6 anos  </span> de experiência
                                </h1>
                                <p className="_text text-gray">
                                    <span className="text-white">Bacharelado em Cências da Computação</span>
                                </p>
                                <p className="_text text-gray">
                                    <span className="text-white">Curso Técnico em TI</span>
                                </p>
                                <p className="_text text-gray">
                                    <span className="text-white">Bacharelado em Cências da Computação</span>
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ x: -400 }}
                                animate={{
                                    x: 0,
                                }}
                                transition={{
                                    x: {
                                        duration: 0.2,
                                        delay: 0.6,
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 130,
                                    },
                                }}
                                className="flex w-full justify-start items-start gap-3 max-md:items-center "
                            >

                                <Button.Wide wide="lg" rounded="lg" variant="gray">
                                    <Button.Icon icon={<IconBrandGithub />} />
                                </Button.Wide>

                                <Button.Wide wide="lg" rounded="lg" variant="blue">
                                    <Button.Icon icon={<IconBrandLinkedin />} />
                                </Button.Wide>
                            </motion.div>

                        </div>

                    </LayoutDiv>

                </LayoutMain>
            }>
            </AnimatedBackground>
        </LayoutSection>
    );
}
