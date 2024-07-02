"use client"

import { useState } from "react";
import { Captation } from "./Captation";
import { Layout } from "./Layouts";
import AnimatedBackground from "./Exhibition/Exhibitions/AnimatedBackground";







export default function CaptationComponent() {
    const [projectServices, setProjectServices] = useState<string[]>([])
    const [projectDescription, setProjectDescription] = useState<string>("")
    const [isStart, setStart] = useState<boolean>(false)
    const [stage, setStage] = useState(2)
    
    return (

<Layout.Section className="h-screen">
            <Layout.Main className="">
                {/* <Layout.Div className="">
                    <div className='text-center py-5 flex flex-col gap-2'>
                        <p className='_text text-palette_gray'>Compartilhe comigo!</p>
                        <div className=" flex items-center gap-3 shadow-lg shadow-violet-900">
                            <Button.Wide variant="default" rounded="full" wide="xl">
                                <Button.Text text="Começe já!"/>
                            </Button.Wide>
                        </div>
                    </div>
                </Layout.Div> */}
                <Layout.Div className=" w-full">
                    <Captation.Root>
                        <Captation.Start setStage={setStage} setStart={setStart} isActive={stage == 0}/>
                        <Captation.Services setStage={setStage} isActive={stage == 1} setProjectServices={setProjectServices}/>
                        <Captation.Description setStage={setStage} isActive={stage == 2} setProjectDescription={setProjectDescription}/>
                        <Captation.Controllers setStage={setStage} numOfStages={3} stage={stage}/>
                    </Captation.Root>
                </Layout.Div>
            </Layout.Main>
        </Layout.Section>

    )
}