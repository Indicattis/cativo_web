"use client"

import { motion } from "framer-motion";
import { Layout } from "../Layouts";
import { Explore } from "./Explore";
import { Card } from "./Explore/ExploreCard";
import { IconBulb, IconCloud, IconCode, IconInputSearch } from "@tabler/icons-react";







export default function ExploreComponent() {

    return (
        <Layout.Section id="captation" className="h-screen relative rounded-b-[600px]">
            <Layout.Main className="z-10">
                <Layout.Div className=" w-full h-full overflow-hidden">
                    <Explore.Root>
                        <Explore.Header/>
                        <Explore.Cards>
                            
                            <Card.Root>
                                {/* <Card.Image url="/img/profile/foto_2.jpeg"/> */}
                                <Card.Icon icon={<IconInputSearch width={50} height={50} stroke={1}/>}/>
                                <Card.Text text={`Explore`} sub_text="Descubra novas possibilidades e soluções inovadoras para o seu site."/>
                            </Card.Root>
                            <Card.Root>
                                {/* <Card.Image url="/img/profile/foto_2.jpeg"/> */}
                                <Card.Icon icon={<IconBulb width={50} height={50} stroke={1}/>}/>
                                <Card.Text text={`Imagine`} sub_text="Transforme suas ideias em visões claras e impactantes."/>
                            </Card.Root>
                            <Card.Root>
                                {/* <Card.Image url="/img/profile/foto_2.jpeg"/> */}
                                <Card.Icon icon={<IconCode width={50} height={50} stroke={1}/>}/>
                                <Card.Text text={`Crie`} sub_text="Coloque sua visão em prática com design e funcionalidade excepcionais."/>
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