'use client'

import DivComponent from "@/components/layout/div";
import StaticImage from "@/components/layout/image/static";
import MainComponent from "@/components/layout/main";
import SectionComponent from "@/components/layout/section";
import DefaultShadow from "@/components/layout/shadow";
import ParagraphComponent from "@/components/layout/texts/paragraph";
import NotebookModel from "@/public/3d/notebook";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";






export default function HomeShowcase() {
    return (
        <SectionComponent className="bg-palette_black">
            <MainComponent className="flex w-full h-full items-center justify-center gap-10  flex-col">
                {/* <div className="w-full h-full cursor-pointer absolute top-10 -left-96 z-50">
                    <Canvas className="">
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <NotebookModel/>
                        </Suspense>
                        <ambientLight intensity={10} />
                        <directionalLight />
                    </Canvas>
                </div> */}
                <DivComponent className="gap-16">
                    <div className={`h-full w-full flex relative items-center justify-center `}>
                        <StaticImage url="/img/notebook-wide-template.png" wide={1000} className="right-10 rounded-[50px] max-md:-right-10" />
                    </div>
                    <div className=" w-full min-h-[600px] flex flex-col justify-center gap-20 ">
                        <ParagraphComponent className="gap-3 text-start" h1="Tecnologias" p="Com as novas tecnologias do mercado as aplicações desenvolvidas contam com funcionalidades reativas e páginas dinâmicas."/>
                        <ParagraphComponent className="gap-3 text-start" h1="Arquitetura" p="Seu codigo fonte será escrito de forma limpa e recursiva para facilitar novas mudanças."/>
                        <ParagraphComponent className="gap-3 text-start" h1="Interface" p="Experimente as melhores cores, imagens e animações para o seu layout."/>
                    </div>
                </DivComponent>

                <DivComponent className="gap-16">
                    <div className=" w-full min-h-[600px] flex flex-col justify-center gap-20 ">
                        <ParagraphComponent className="gap-3 text-start" h1="Preço justo" p="Projetos pelo preço ideal para você! Orçamento detalhado com diversas opções de pagamento."/>
                        <ParagraphComponent className="gap-3 text-start" h1="Elaboração" p="Todo o cuidado e atenção na hora de elaborar seu projeto com novas ideias e discussões sobre seu desenvolvimento."/>
                        <ParagraphComponent className="gap-3 text-start" h1="Confiabilidade" p="Segurança e estabilidade nas tecnologias de desenvolvimento mais atualizadas do mercado."/>
                    </div>
                    <div className={`h-full w-full flex relative items-center justify-center `}>
                        <StaticImage url="/img/desktop-ambient-template.png" wide={800} className="left-10 rounded-[50px] max-md:-left-10" />
                    </div>
                </DivComponent>
            </MainComponent>
        </SectionComponent>
    )
}
