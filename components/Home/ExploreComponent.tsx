"use client"

import { motion } from "framer-motion";
import { Layout } from "../Layouts";
import { Explore } from "./Explore";
import { Card } from "./Explore/ExploreCard";
import { IconBulb, IconCloud, IconCode, IconInputSearch } from "@tabler/icons-react";







export default function ExploreComponent() {

    return (
        <Layout.Section id="explore" className="min-h-screen relative rounded-b-[600px] max-md:rounded-none">
            <Layout.Main className="z-10">
                <Layout.Div className=" w-full h-full overflow-hidden">
                    <Explore.Root>
                        <Explore.Header/>
                        <Explore.Cards>
                            
                            <Card.Root>
                                {/* <Card.Image url="/img/profile/foto_2.jpeg"/> */}
                                <Card.Icon icon={<IconBulb width={50} height={50} stroke={1}/>}/>
                                <Card.Text text={`Explore`} sub_text="Adquira referências que atendam aos seus requisitos e entre em contato para descrever sua ideia."/>
                            </Card.Root>
                            <Card.Root>
                                {/* <Card.Image url="/img/profile/foto_2.jpeg"/> */}
                                <Card.Icon icon={<IconInputSearch width={50} height={50} stroke={1}/>}/>
                                <Card.Text text={`Visualize`} sub_text="Veja como seu projeto pode ser em mockups e pré-visualizações profissionais."/>
                            </Card.Root>
                            <Card.Root>
                                {/* <Card.Image url="/img/profile/foto_2.jpeg"/> */}
                                <Card.Icon icon={<IconCode width={50} height={50} stroke={1}/>}/>
                                <Card.Text text={`Crie`} sub_text="Projeção em prática! Seu aplicativo será construído e entregue com prazos bem definidos."/>
                            </Card.Root>
                        </Explore.Cards>
                        <Explore.Button/>
                    </Explore.Root>
                    
                </Layout.Div>
            </Layout.Main>
            <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-neon_purple to-transparent z-0 opacity-30"></div>
            <div className="absolute  left-0 h-full w-[50%] bg-gradient-to-r from-black to-transparent z-0 "></div>
            <div className="absolute  right-0 h-full w-[50%] bg-gradient-to-l from-black to-transparent z-0 "></div>
        </Layout.Section>

    )
}