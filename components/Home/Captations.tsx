"use client"

import { useEffect, useState } from "react";
import { Layout } from "../Layouts";
import { Button } from "../utils/Button";
import { Captation } from "./Captation";







export default function CaptationComponent() {
    const [stage, setStage] = useState(0)
    const [order, setOrder] = useState<OrderDTO | undefined>()
    const [projectServices, setProjectServices] = useState<string[]>([])
    const [projectDescription, setProjectDescription] = useState<string>("")
    const [projectPlan, setProjectPlan] = useState<string>("plan2")
    const [client, setClient] = useState<ClientDTO>()

    useEffect(() => {
        const recordData= () => {
            const newOrder: OrderDTO = {
                id: 1,
                projectPlan: projectPlan,
                projectServices: projectServices,
                projectDescription: projectDescription, 
            }
            setOrder(newOrder)
        }
        recordData()
    }, [projectDescription, projectServices, projectPlan])

    return (
        <Layout.Section className="h-screen relative">
            <Layout.Main className="z-10">
                <Layout.Div className=" w-full h-full overflow-hidden">
                    <Captation.Root>
                        <Captation.Start setStage={setStage} setPlan={setProjectPlan} isActive={stage == 0} />
                        <Captation.Services setStage={setStage} isActive={stage == 1} setProjectServices={setProjectServices} />
                        <Captation.Description setStage={setStage} isActive={stage == 2} setProjectDescription={setProjectDescription} />
                        <Captation.Client setStage={setStage} isActive={stage == 3} setClient={setClient}/>
                        <Captation.End data={order} client={client} setStage={setStage}  isActive={stage == 4} />
                        <Captation.Controllers isActive={stage != 0} numOfStages={5} stage={stage} />
                    </Captation.Root>
                    
                </Layout.Div>
            </Layout.Main>
            <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-neon_purple to-transparent z-0 opacity-30"></div>
            <div className="absolute  left-0 h-full w-[50%] bg-gradient-to-r from-black to-transparent z-0 "></div>
            <div className="absolute  right-0 h-full w-[50%] bg-gradient-to-l from-black to-transparent z-0 "></div>
        </Layout.Section>

    )
}