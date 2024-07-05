
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled, IconCheck } from "@tabler/icons-react"
import Image from "next/image"
import { ReactNode } from "react"
import { Chat } from "./Chat"



interface CaptationEndProps {
    isActive?: boolean
    setStage: React.Dispatch<React.SetStateAction<number>>
    data: OrderDTO | undefined
    client: ClientDTO | undefined
}


export default function CaptationEnd({ isActive, setStage, data, client }: CaptationEndProps) {

    const startChatWhatsapp = () => {
        const services = data?.projectServices.map(str => str.toLowerCase());
        const description = (data?.projectDescription)?.toLowerCase
        window.location.href = `https://wa.me/5554996598024?text=Olá!%20quero%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20um%20projeto!\n%20Quero%20algo%20que%20tenha%20${services}.\n%20Minha%20ideia%20é%20${description}.`
    }

    return (
        <AnimatePresence>
            {isActive && (

                <motion.div
                    key={`CaptationStart-anim`}
                    initial={{ x: 1500, position: "absolute" }}
                    animate={{ x: 0, position: "initial" }}
                    exit={{ x: -1500, position: "absolute" }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50
                    }} className="flex flex-col justify-between items-start gap-5 h-full top-0">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h1 className="_display_text">Quase lá!</h1>
                        <p className="_text text-palette_gray">Confira se todas as informações estão corretas</p>
                    </div>
                    {/* <div className="flex w-full items-center gap-5 p-3  rounded">
                        {client?.profile_picture ? (
                            <div className="rounded-full overflow-hidden">
                                <Image alt="" src={`${client?.profile_picture ? client?.profile_picture : "/"}`} width={60} height={60} />
                            </div>) : ("")}

                        <div className="flex flex-col justify-center">
                            <h1 className="_text">{client?.profile_name}</h1>
                            <p className="_text _small ">{client?.profile_mail}</p>
                        </div>
                    </div> */}

                    <Chat.Root>
                        <Chat.Message delay={2} side="right" text={`Olá! Eu gostaria de saber mais sobre o desenvolvimento de um projeto! `} />
                        <Chat.Message delay={6} side="right" text={
                            <span>
                                <span>Estava pensando em um sistema com: </span>
                                {data?.projectServices.map((service, index) => {
                                    return (
                                        <span className="lowercase" key={"service-map" + index}><br/>{service}{index !== data.projectServices.length - 1 ? ', ' : ''}</span>
                                    )
                                })}
                            </span>
                        }
                        />
                        {data?.projectDescription != "" && (
                            <Chat.Message delay={10} side="right" text={`A minha ideia é ${data?.projectDescription}!`} />
                        )}
                        <Chat.Message delay={16} side="left" text={`Opa! É pra já!`} />
                        </Chat.Root>
                    {/* <div className="flex flex-col gap-6 w-full">
                        <div className="flex justify-end">
                            <motion.div 
                            className="flex flex-col gap-3 overflow-hidden">
                                <motion.div 
                                initial={{ height: 0, scale: 0}}
                                animate={{  height: 80, scale: 1}}
                                exit={{ height: 0, scale: 0}}
                                transition={{delay: 0.8}}
                                className="p-5 _text max-h-48 bg-purple rounded-3xl rounded-br-none">
                                    Olá! Eu gostaria de saber mais sobre o desenvolvimento de um projeto!  
                                    
                                </motion.div>
                                <motion.div
                                initial={{ height: 0, scale: 0}}
                                animate={{  height: 80, scale: 1}}
                                exit={{ height: 0, scale: 0}}
                                transition={{delay: 1.2}}
                                className="p-5 _text max-h-48 bg-purple rounded-3xl rounded-br-none">

                                    {data?.projectServices.map((service, index) => {
                                        return (
                                            <span className="lowercase" key={"service-map" + index}> {service}{index !== data.projectServices.length - 1 ? ', ' : ''}</span>
                                        )
                                    })}.
                                </motion.div>
                                <motion.div
                                initial={{ height: 0, scale: 0}}
                                animate={{  height: 80, scale: 1}}
                                exit={{ height: 0, scale: 0}}
                                transition={{delay: 1.4}} 
                                className="p-5 _text max-h-48 bg-purple rounded-3xl rounded-br-none">
                                    <p>A minha ideia é {data?.projectDescription}!</p>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="w-full flex justify-start">
                            <motion.div 
                            initial={{width: 0, scale: 0}}
                            animate={{width: "auto",  scale: 1}}
                            exit={{width: 0, scale: 0}}
                            transition={{
                                delay: 1.5,
                                type: "spring",
                                stiffness: 150,
                                damping:20
                            }}className="bg-purple rounded-3xl rounded-bl-none h-12 w-32">
                                <motion.p
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{delay: 2}}
                                 className="p-3 _text">Opa! É pra já!</motion.p>

                            </motion.div>
                        </div>
                    </div> */}
                    <div className="w-full flex items-center justify-between gap-2 border-t border-purple py-5">
                        <Button.Wide rounded="full" variant="disabled" wide="lg" onClick={() => { setStage(0) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Voltar" />
                        </Button.Wide>
                        <Button.Wide rounded="full" variant="default" wide="lg" onClick={startChatWhatsapp}>
                            <Button.Text text="Enviar" />
                            <Button.Icon icon={<IconCheck />} />
                        </Button.Wide>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
