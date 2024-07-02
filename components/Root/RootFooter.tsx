"use client"

import Image from "next/image";
import { Layout } from "../Layouts";
import { Button } from "../utils/Button";
import { IconCaretUpFilled } from "@tabler/icons-react";







export default function RootFooter() {
    return (
        <footer className=" bg-black w-full">
            <Layout.Section className="">
                <Layout.Main className="gap-5">
                    <Layout.Div className="flex justify-between items-center gap-5 w-full border-b border-purple py-5 max-md:flex-col">
                        <div className=" flex flex-col gap-3">
                            <h1 className="_text">Termos de privacidade</h1>
                            <p className="_text _small text-palette_gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde ut corrupti suscipit cupiditate sequi consequuntur. Quaerat accusamus deleniti a placeat dolore. Error labore maxime facere accusantium explicabo. Odio, voluptas.</p>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <h1 className="_text">Aviso de uso</h1>
                            <p className="_text _small text-palette_gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde ut corrupti suscipit cupiditate sequi consequuntur. Quaerat accusamus deleniti a placeat dolore. Error labore maxime facere accusantium explicabo. Odio, voluptas.</p>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <h1 className="_text">Termos de privacidade</h1>
                            <p className="_text _small text-palette_gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde ut corrupti suscipit cupiditate sequi consequuntur. Quaerat accusamus deleniti a placeat dolore. Error labore maxime facere accusantium explicabo. Odio, voluptas.</p>
                        </div>
                    </Layout.Div>
                    
                <Layout.Div className="!justify-start w-full _text _small text-palette_gray gap-3">
                    Copright@ 2024, todos os direitos reservados
                </Layout.Div>
                    <Layout.Div className="justify-between gap-3 max-md:flex-col">
                        <div className="flex gap-3 items-center justify-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <Image alt="" src={`/img/profile/indicatti.jpg`} width={100} height={100}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1>João Pedro Staehler Indicatti</h1>
                                <p className="_text _small text-palette_gray">2024, inc</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href="">Sobre</a>
                            <a href="">Contato</a>
                            <a href="">Ajuda</a>
                            <Button.Wide rounded="lg" variant="default" wide="lg">
                            <a href="#exhibition"><Button.Icon icon={<IconCaretUpFilled/>}/></a>
                            
                            </Button.Wide>
                        </div>
                    </Layout.Div>
                </Layout.Main>
            </Layout.Section>
        </footer>
    )
}