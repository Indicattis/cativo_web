import LayoutDiv from "@/components/Layouts/LayoutDiv";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutSection from "@/components/Layouts/LayoutSection";
import { Button } from "@/components/utils/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slider_1() {

    return (
        <LayoutSection className="h-full w-full">
            <LayoutMain className="h-full w-full">
                <LayoutDiv className="h-full w-full max-md:flex-col-reverse">

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
                            className="relative flex flex-col w-full"
                        >
                            <h1 className="_display_text _biggest text-wrap max-md:text-[20px]">
                                Olá! eu sou um <span className="text-neon_purple">Desenvolvedor</span>
                            </h1>
                            <p className="_text text-gray">
                                <span className="text-white">João Pedro Indicatti</span> -
                                Frontend Developer{" "}
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
                            className="flex flex-col w-full justify-center items-start gap-3 "
                        >
                            
                        <Button.Wide wide="lg" rounded="lg" variant="purple" onClick={() => window.location.href = "#captation"}>
                            <Button.Text text="Get started"/>
                        </Button.Wide>
                        </motion.div>

                    </div>

                    <motion.div
                        animate={{
                            y: [0, 5, -5, 5, 0],
                        }}
                        transition={{
                            y: {
                                duration: 10,
                                ease: "easeIn",
                                damping: 100,
                                stiffness: 60,
                                bounceDamping: 100,
                                times: [0, 0.1, 0.7, 2, 19, 10],
                                repeat: Infinity,
                                repeatDelay: 0,
                                // delay: 0,
                            }
                        }}
                        className="relative h-full w-full flex justify-center items-center max-md:items-end  max-md:w-[250px]"
                    >
                        <motion.div
                            className={`absolute w-full rounded-[50px] flex justify-center items-center transition-all cursor-pointer z-10`}
                        >
                            <Image
                                className="object-cover z-10 rounded-[50px] max-h-[600px] w-full "
                                alt=""
                                width={1000}
                                height={1000}
                                src={`/img/profile/indicatti.jpg`}
                            />
                            <motion.div className="absolute bottom-0 left-0 z-20 bg-gradient-to-t from-black w-full h-24 rounded-b-[50px]"></motion.div>
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [0, 15, 15, 15, 0],
                                x: [0, 15, 15, 15, 0],
                            }}
                            transition={{
                                duration: 10,
                                ease: "easeIn",
                                times: [0, 1, 3, 8, 9, 10],
                                repeat: Infinity,
                                repeatDelay: 0,
                            }}
                            className={`z-0 absolute w-full h-[600px] max-md:h-[330px] rounded-[50px]  max-md:w-[250px] bg-neon_purple`}
                        ></motion.div>
                    </motion.div>
                </LayoutDiv>

            </LayoutMain>
        </LayoutSection>
    );
}
