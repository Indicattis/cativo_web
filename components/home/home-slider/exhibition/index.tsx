import { motion, useMotionValue } from "framer-motion";
import { ConvertRGB, getColor } from "@/components/utils/getColor";
import { useState, useEffect, useRef, Suspense } from "react";
import { colors } from "@/data/json/colors";
import DefaultShadow from "@/components/layout/shadow";
import Image from "next/image";
import DefaultButton from "@/components/layout/button";
import { WebsiteHyperlink } from "../../home_material/showcase";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandVercel } from "@tabler/icons-react";

interface InterProps {
    color?: string;
}

export default function ExhibitionComponent({ color }: InterProps) {
    const [light, setLight] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
            setLight(randomColor);
        }, 10000); // Troca a cor a cada 5 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <ExhibitionContainer>
            {/* <BordersNeon light={light} x={x} ballWidth={ballWidth} /> */}
            <ExhibitionSection>
                <div className="w-full h-full flex flex-col justify-center items-start gap-5 overflow-hidden">
                    {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}
                    <div className="flex w-full items-center gap-3 justify-start px-5 max-md:justify-center">
                        <WebsiteHyperlink exhibition="github" icon={<IconBrandGithub/>} theme="gray" url="https://github.com/Indicattis"/>
                        <WebsiteHyperlink exhibition="vercel" icon={<IconBrandVercel/>} theme="black" url="https://vercel.com/indicattis-projects"/>
                        <WebsiteHyperlink exhibition="instagram" icon={<IconBrandInstagram/>} theme="neon_red" url="https://vercel.com/indicattis-projects"/>
                        <WebsiteHyperlink exhibition="linkedin" icon={<IconBrandLinkedin/>} theme="neon_purple" url="https://vercel.com/indicattis-projects"/>
                    </div>
                    <motion.div
                        initial={{ x: -200 }}
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
                        className="relative flex flex-col w-full px-5 gap-2 max-md:text-center"
                    >
                        <h1 className="_display_text _biggest text-wrap max-md:!text-[20px]">
                            Olá! Seja bem vindo!
                        </h1>
                        <div className="_text text-zinc-400">
                            Eu sou o{" "}
                            <span className="text-white">João Pedro</span> e sou
                            um desenvolvedor de sites, quer saber mais sobre meu
                            trabalho?{" "}
                            <span className="text-white">
                                Clique no botão abaixo.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            x: {
                                duration: 0.2,
                                delay: 0.7,
                                type: "spring",
                                stiffness: 600,
                                damping: 130,
                            },
                        }}
                        className="flex flex-col w-full justify-center items-start px-5 gap-3 max-md:items-center "
                    >
                        <DefaultButton
                            variant="filled"
                            wide="xl"
                            rounded="full"
                            type="button"
                            theme={ConvertRGB(light)}
                        >
                            Explorar
                        </DefaultButton>
                    </motion.div>
                    
                    {/* Bola aqui */}
                </div>

                {/* <div className="w-full h-full cursor-pointer flex items-center justify-center overflow-auto ">
        <Canvas className="h-full flex items-center justify-center w-full ">
          <OrbitControls enableZoom={false} />
          <ColorCase theme={light}/>
          <Suspense fallback={null}>
            <GradientBlock theme={light}/>
          </Suspense>

          <ambientLight intensity={10}/>
          <directionalLight position={[-1, 2, 0]} />
        </Canvas>
        </div>  */}
                <motion.div
                initial={{rotate: 6}}
                    animate={{
                        y: [0, 20, -20, 10, 0],
                        rotate: 6
                    }}
                    transition={{
                        y: {
                            duration: 10,
                            ease: "easeIn",
                            damping: 100,
                            stiffness: 60,
                            bounceDamping: 100,
                            times: [0, 2, 4, 6, 8, 10],
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
                            src={`/img/colaborates/indicatti.jpg`}
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
                        className={`z-0 absolute w-full h-[600px] max-md:h-[330px] rounded-[50px]  max-md:w-[250px] ${getColor(
                            ConvertRGB(light)
                        )}`}
                    ></motion.div>
                </motion.div>
            </ExhibitionSection>
            <DefaultShadow
                theme={ConvertRGB(light)}
                height={1500}
                width={1500}
                distanceY={700}
                distanceX={-400}
                slack={200}
            ></DefaultShadow>
        </ExhibitionContainer>
    );
}

type Children = {
    children: React.ReactNode[];
};

function ExhibitionContainer({ children }: Children) {
    return (
        <div
            className={`w-full h-full flex items-center justify-center  relative overflow-hidden`}
        >
            {...children}
        </div>
    );
}

function ExhibitionSection({ children }: Children) {
    return (
        <div className="relative w-full h-full flex items-center justify-center gap-5 max-w-[1080px] max-md:flex-col-reverse z-10">
            {...children}
        </div>
    );
}
