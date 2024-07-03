"use client"

import { useState } from "react";
import { Captation } from "./Captation";
import { Layout } from "./Layouts";
import { Button } from "./utils/Button";







export default function CaptationComponent() {
    const [projectServices, setProjectServices] = useState<string[]>([])
    const [projectDescription, setProjectDescription] = useState<string>("")
    const [projectPlan, setProjectPlan] = useState<string>("")
    const [stage, setStage] = useState(0)

    return (
        <Layout.Section className="h-screen">
            <Layout.Main className="">
                <Layout.Div className=" w-full h-full">
                    <Captation.Root>
                        <Captation.Start setStage={setStage} setPlan={setProjectPlan} isActive={stage == 0} />
                        <Captation.Services setStage={setStage} isActive={stage == 1} setProjectServices={setProjectServices} />
                        <Captation.Description setStage={setStage} isActive={stage == 2} setProjectDescription={setProjectDescription} />
                        <Captation.Controllers setStage={setStage} numOfStages={3} stage={stage} />
                    </Captation.Root>
                </Layout.Div>
            </Layout.Main>
        </Layout.Section>

    )
}