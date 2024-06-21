"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileShowcase from "./showcase/mobile";
import  { WebsiteHyperlink } from "./showcase";
import WebsiteShowcase from "./showcase";
import ControllerDefault from "@/components/inc/controllers/default";
import Image from "next/image";
import {
    IconBrandGithub,
    IconBrandVercel,
    IconDeviceMobile,
} from "@tabler/icons-react";
import { getColor, getTextColor } from "@/components/utils/getColor";
import MainComponent from "@/components/layout/main";
import CopyrightCard from "./copyright";

interface PortifolioProps {
    web_data: WebDataDTO[];
    web_services: WebServiceDTO[];
}

export default function MaterialComponent({
    web_services,
    web_data,
}: PortifolioProps) {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);
    const [selectedSubItemIndex, setSelectedSubItemIndex] = useState<number>(0);
    const [filteredWebData, setFilteredData] = useState<WebDataDTO[]>([]);

    useEffect(() => {
        const newData = web_data.filter(
            (data) => data.service_id === selectedItemIndex
        );
        setFilteredData(newData);
    }, [selectedItemIndex, web_data]);

    return (
        <section className={`_section relative overflow-hidden `}>
            <MainComponent className="relative w-full flex justify-between  max-md:flex-col gap-5">
                <div className=" flex flex-col items-start gap-3">
                    <h1 className="_display_text">Expl<span className={`${getTextColor("neon_purple")}`}>ore</span></h1>
                    <p className="_text">
                        Veja exemplos de projetos realizados!
                    </p>
                </div>
                <ControllerDefault
                    selectedItem={selectedItemIndex}
                    setSelectedItem={setSelectedItemIndex}
                    numOfSliders={web_services.length}
                    data={web_services}
                />
            </MainComponent>

            <MainComponent className="w-full flex flex-col items-center">
                <motion.div
                    className={`flex gap-10 justify-center  w-full max-md:flex-col-reverse py-10 `}
                >
                    {/* <motion.div className="flex flex-col gap-5 w-[300px] p-3 max-md:p-5 max-md:w-full">
                            <h1 className="_display_text flex flex-col gap-2 justify-center">
                                <span className="flex gap-2">
                                    <IconListCheck></IconListCheck>
                                    Especificações
                                </span>
                                <span className="_text _small font-light text-zinc-400">
                                    Propriedades de desenvolvimento
                                </span>
                            </h1>
                            <div className="flex flex-col gap-3">
                                <SelectDefault
                                    theme={
                                        web_services[selectedItemIndex - 1]
                                            ?.theme
                                    }
                                    exhibition="Tecnologias"
                                    itens={[
                                        <SelectOption
                                            key={`tec-1`}
                                            icon={
                                                <IconBrandNodejs width={18} />
                                            }
                                            label="Node JS"
                                        />,
                                        <SelectOption
                                            key={`tec-2`}
                                            icon={<IconBrandReact width={18} />}
                                            label="React JS"
                                        />,
                                        <SelectOption
                                            key={`tec-3`}
                                            icon={
                                                <IconBrandTypescript
                                                    width={18}
                                                />
                                            }
                                            label="Typescript"
                                        />,
                                    ]}
                                />
                                <SelectDefault
                                    theme={
                                        web_services[selectedItemIndex - 1]
                                            ?.theme
                                    }
                                    exhibition="Design"
                                    itens={[
                                        <SelectOption
                                            key={`des-1`}
                                            icon={
                                                <IconBrandTailwind width={18} />
                                            }
                                            label="Cores personalizadas"
                                        />,
                                        <SelectOption
                                            key={`des-2`}
                                            icon={
                                                <IconBrandFramerMotion
                                                    width={18}
                                                />
                                            }
                                            label="Animações"
                                        />,
                                        <SelectOption
                                            key={`des-3`}
                                            icon={<IconHexagons width={18} />}
                                            label="Diversas bibliotecas"
                                        />,
                                    ]}
                                />
                                <SelectDefault
                                    theme={
                                        web_services[selectedItemIndex - 1]
                                            ?.theme
                                    }
                                    exhibition="Hospedagem"
                                    itens={[
                                        <SelectOption
                                            key={`host-1`}
                                            icon={<IconBrandAws width={18} />}
                                            label="Amazon Web Services"
                                        />,
                                        <SelectOption
                                            key={`host-2`}
                                            icon={<IconNetwork width={18} />}
                                            label="Domínio próprio"
                                        />,
                                        <SelectOption
                                            key={`host-3`}
                                            icon={<IconCloud width={18} />}
                                            label="Hospedagem em núvem"
                                        />,
                                    ]}
                                />
                                <SelectDefault
                                    theme={
                                        web_services[selectedItemIndex - 1]
                                            ?.theme
                                    }
                                    exhibition="Segurança"
                                    itens={[
                                        <SelectOption
                                            key={`seg-1`}
                                            icon={<IconRefresh width={18} />}
                                            label="Backups"
                                        />,
                                        <SelectOption
                                            key={`seg-2`}
                                            icon={<IconSpy width={18} />}
                                            label="Cookies e privacidade"
                                        />,
                                        <SelectOption
                                            key={`seg-3`}
                                            icon={
                                                <IconCertificate width={18} />
                                            }
                                            label="Certificado SSL"
                                        />,
                                    ]}
                                />
                            </div>
                        </motion.div> */}

                    {/* Aqui - exibir url do primeiro subitem do item selecionado acima */}
                    <div className="flex flex-col gap-10 items-center justify-center h-full w-full">
                        {filteredWebData.length > 0 && (
                            <WebsiteShowcase
                                exhibition={
                                    filteredWebData[selectedSubItemIndex]
                                        ?.exhibition
                                }
                                key={filteredWebData[selectedSubItemIndex]?.id}
                                url={filteredWebData[selectedSubItemIndex]?.url}
                                theme={
                                    web_services[selectedItemIndex - 1]?.theme
                                }
                            />
                        )}

                        <div
                            className={`relative w-full flex justify-center items-center overflow-hidden gap-5  h-5 `}
                        >
                            {filteredWebData.length > 0 &&
                                filteredWebData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() =>
                                            setSelectedSubItemIndex(index)
                                        }
                                    >
                                        <div
                                            className={`w-10 h-1 cursor-pointer rounded-full ${
                                                selectedSubItemIndex == index
                                                    ? "bg-white"
                                                    : "bg-zinc-400"
                                            }`}
                                        ></div>
                                    </motion.div>
                                ))}
                        </div>
                        <CopyrightCard/>
                    </div>
                </motion.div>
            </MainComponent>
            <motion.div
                className={`relative gap-3 w-full items-center justify-center h-full flex flex-col overflow-x-auto py-3 ${getColor(
                    "neon_purple"
                )}`}
            >
                <h1 className="   flex flex-col gap-2 items-center w-full">
                    <div className="flex gap-2 items-center _display_text">
                        <IconDeviceMobile></IconDeviceMobile>Dispositivos
                        móveis
                    </div>
                    <span className="_text   text-white">
                        Responsividade
                    </span>
                </h1>
                <div className="flex gap-3">
                    {/* Aqui - listar as subimagens do subitem selecionado acima*/}
                    {filteredWebData.length > 0 &&
                        filteredWebData[selectedSubItemIndex]?.subimages
                            .slice(0, 4)
                            .map((subimage, index) => (
                                <motion.div
                                    key={`mobile-showcase-${index}`}
                                >
                                    <MobileShowcase
                                        key={index}
                                        url={subimage}
                                    />
                                </motion.div>
                            ))}
                </div>
            </motion.div>
            {/* <div className="w-full bg-gray flex justify-center">
                <div className=" max-w-[1080px] w-full">
                    <Colaborate
                        age="23"
                        img="/img/colaborates/indicatti.jpg"
                        name="João Pedro Indicatti"
                        role="Desenvolvedor"
                        skills={colaborates_array[0].skills}
                        theme={web_services[selectedItemIndex - 1]?.theme}
                    />
                </div>
            </div> */}
        </section>
    );
}
