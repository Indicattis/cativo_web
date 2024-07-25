"use client"

import { useState } from "react";
import { Layout } from "../Layouts";
import { Evaluetion } from "./Evaluetion";
import EvaluetionForm from "./Evaluetion/EvaluetionForm";




export default function EvaluetionComponent() {
    const [stage, setStage] = useState<number>(1)
    const [userData, setUserData] = useState<ClientDTO>()
    return (
        <Layout.Section className="min-h-screen">
            <Layout.Main className="z-20">
                <Layout.Div className="">
                    <Evaluetion.Root>
                        <Evaluetion.Sign setUserData={setUserData} changeStage={setStage} isActive={stage == 1}/>
                        <Evaluetion.Form userData={userData} changeStage={setStage} isActive={stage == 2}/>
                        <Evaluetion.End changeStage={setStage} isActive={stage == 3}/>
                    </Evaluetion.Root>
                </Layout.Div>
            </Layout.Main>
            <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-neon_purple to-transparent z-0 opacity-30"></div>
            <div className="absolute  left-0 h-full w-[50%] bg-gradient-to-r from-black to-transparent z-0 "></div>
            <div className="absolute  right-0 h-full w-[50%] bg-gradient-to-l from-black to-transparent z-0 "></div>
        </Layout.Section>
    )
}