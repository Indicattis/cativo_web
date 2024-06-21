
import { motion } from "framer-motion"
import Image from "next/image"
import { IconBrandAws, IconBrandFramerMotion, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconBrandVercel, IconCertificate, IconCloud, IconHexagons, IconListCheck, IconNetwork, IconRefresh, IconSpy } from "@tabler/icons-react"
import { WebsiteHyperlink } from "../../home_material/showcase"
import SelectDefault, { SelectOption } from "@/components/layout/select"




export default function PersonalCard() {
    return (

        <motion.div className="w-full flex flex-col items-center gap-1 justify-center">

            <div className="h-full flex flex-col justify-start gap-10">
                <div className="flex gap-3 w-full items-center justify-center max-lg:flex-col">
                    <div className="w-full flex gap-3 items-center justify-between max-lg:flex-col">
                        <div className="w-[150px] h-[110px] overflow-hidden rounded-full border-2 border-neon_purple">
                            <Image
                            className=""
                                width={1000}
                                height={1000}
                                alt=""
                                src={`/img/colaborates/indicatti.jpg`}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1 w-full max-lg:items-center">
                            <h1 className="_display_text">João Pedro Indicatti</h1>
                            <p className="_text text-palette_gray">Desenvolvedor Web</p>
                        </div>
                    </div>

                    <motion.div
                        className=" flex  items-center gap-3 justify-center p-1  h-14 rounded-xl">
                        <div className="rounded-lg bg-zinc-800 w-12 h-12 flex items-center justify-center">
                            <IconBrandGithub />
                        </div>
                        <div className="rounded-lg bg-black w-12 h-12 flex items-center justify-center">
                            <IconBrandVercel />
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-pink-700 to-violet-500 w-12 h-12 flex items-center justify-center">
                            <IconBrandInstagram />
                        </div>
                        <div className="rounded-lg bg-blue-600 w-12 h-12 flex items-center justify-center">
                            <IconBrandLinkedin />
                        </div>
                    </motion.div>
                </div>




                <div className="flex justify-between gap-3 max-lg:flex-col">
                    <h1 className="text-white _text font-thin  rounded-lg p-3 bg-palette_dark border-2 border-transparent cursor-pointer hover:border-neon_purple">
                        `&quot;`Meu nome é João Pedro e trabalho no desenvolvimento de
                        aplicações web utilizando diversas ferramentas tanto para
                        desenvolvimento, quanto deploy e hospedagem.`&quot;`
                    </h1>

                    <h1 className="text-white _text font-thin rounded-lg p-3 bg-palette_dark border-2 border-transparent cursor-pointer hover:border-neon_purple ">
                        `&quot;`Faço uso dos serviços da Amazon Cloud Service (AWS) como EC2
                        e RDS para databases e hospedagem. Também utilizo github com a
                        vercel para deploy teste de aplicações.`&quot;`
                    </h1>

                    <h1 className="text-white _text font-thin rounded-lg p-3 bg-palette_dark border-2 border-transparent cursor-pointer hover:border-neon_purple ">
                        `&quot;`Tenho grande anseio pela área do desenvolvimento e sempre
                        busco por mais conhecimento para ampliar minhas capacidades e
                        ferramentas.`&quot;`
                    </h1>

                    
                </div>
                
                <motion.div className="flex items-start justify-center gap-5 w-full  max-md:w-full max-lg:flex-wrap">
                    <SelectDefault
                        theme={`neon_purple`}
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
                        theme={`neon_purple`}
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
                        theme={`neon_purple`}
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
                        theme={`neon_purple`}
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
                </motion.div>
            </div>


        </motion.div>
    )
}