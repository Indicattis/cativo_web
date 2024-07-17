"use cleent"

import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../../utils/Button"
import { IconCaretRightFilled, IconCheck, IconExclamationCircle, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Modal } from "../../utils/Modal"


interface CaptationStart {
    setStage: React.Dispatch<React.SetStateAction<number>>
    setPlan: React.Dispatch<React.SetStateAction<string>>
    isActive?: boolean
}


export default function CaptationStart({ setStage, setPlan, isActive }: CaptationStart) {
    const [planChoice, setPlanChoice] = useState("plan2")
    const [modalActive, setModalActive] = useState<boolean>(false)
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
                        <h1 className="_display_text">Get Started!</h1>
                        <p className="_text text-palette_gray">Deseja criar um projeto ou tem alguma ideia em mente?</p>
                    </div>

                    <div className="flex gap-3 w-full items-center max-md:flex-col">
                        <BasicPlanCard isActive={planChoice == "plan1"} onChange={setPlanChoice} />
                        <DefaultPlanCard isActive={planChoice == "plan2"} onChange={setPlanChoice} />
                        <AdvancedPlanCard isActive={planChoice == "plan3"} onChange={setPlanChoice} />
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 border-t border-purple py-5">
                        <div 
                            onClick={() => setModalActive(true)}
                            className="cursor-pointer _text _small text-contrast_color_3 border-b border-contrast_color_3">Como funcionam os planos?</div>
                            <Button.Wide rounded="full" variant="default" wide="lg" onClick={() => { setPlan(planChoice), setStage(1) }}>
                                <Button.Text text="Começar!" />
                                <Button.Icon icon={<IconCaretRightFilled />} />
                            </Button.Wide>
                        </div>
                </motion.div>
            )}
            {modalActive && (

                <Modal.Root>
                    <Modal.Box>
                        <Modal.Message message={`Planos`}/>
                        <Modal.Content className="flex flex-col gap-3">
                            <div className="_text ">
                                <p className="">Projeto simples: </p>
                                <p className="_text _small">Este plano é ideal para projetos simples e rápidos, como landing pages, sites de página única, sites institucionais e portfólios online. Perfeito para quem deseja uma presença online funcional e eficiente.</p>
                            </div>
                            <div className="_text ">
                                <p className="">Projeto desenvolvido: </p>
                                <p className="_text _small">Perfeito para projetos mais complexos e desenvolvidos, este plano atende sites de notícias e mídia, blogs, sistemas de agendamento online e qualquer projeto que lida com um volume significativo de dados.</p>
                            </div>
                            <div className="_text ">
                                <p className="">Grande porte: </p>
                                <p className="_text _small">Ideal para projetos de grande porte, este plano é voltado para sites de e-commerce, sistemas de gestão interna (ERPs) e projetos que necessitam lidar com um grande volume de dados, garantindo robustez e eficiência.</p>
                            </div>
                        </Modal.Content>
                        <Modal.Button onClick={setModalActive}/>
                    </Modal.Box>
                </Modal.Root>
            )}
        </AnimatePresence>
    )
}


interface CardProps {
    onChange: (plan: string) => void
    isActive: boolean
}

function BasicPlanCard({ onChange, isActive }: CardProps) {
    return (
        <div
            onClick={() => onChange("plan1")}
            className={`
            ${isActive ? "bg-gradient-to-tr from-neon_purple to-neon_pink2 " : "bg-gradient-to-r from-contrast_color_2 to-purple"}
        w-full  rounded-md shadow-lg cursor-pointer p-3 flex flex-col gap-3`}>
            <div className="w-full  p-3 bg-black rounded">
                <h1 className="_display_text">Projeto Simples</h1>
            </div>
            <div className="flex flex-col gap-1 _text">
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Landing Page</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Sites de Página Única</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Sites Institucionais</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Portfólios Online</div>
                {/* <div className="flex gap-1 items-center"><IconX className="text-neon_red" />Alterações inclusas</div> */}
                {/* <div className="flex gap-1 items-center"><IconX className="text-neon_red" />Primeiros 3 meses grátis</div> */}
                <div className="flex gap-1 items-center"></div>
            </div>
            {/* <div className="w-full flex flex-col items-center justify-center p-3 text-center bg-black rounded">
                <p className="_text">a partir de</p>
                <h1 className="_display_text">149,90/mês</h1>
            </div> */}
            {/* <div>
                <p className="_text _small text-center py-3 flex gap-2 items-center justify-center"><IconExclamationCircle />Valor de desenvolvimento não incluso</p>
            </div> */}
            <div className="w-full flex flex-wrap items-center gap-1 _text _small">
                <div className="text-center bg-purple rounded p-2">+mockup</div>
                <div className="text-center bg-purple rounded p-2">+design</div>
                <div className="text-center bg-purple rounded p-2">+artes</div>
            </div>
        </div>
    )
}


function DefaultPlanCard({ onChange, isActive }: CardProps) {
    return (
        <div
            onClick={() => onChange("plan2")}
            className={`
            ${isActive ? "bg-gradient-to-tr from-neon_purple to-neon_pink2 " : "bg-gradient-to-r from-contrast_color_2 to-purple"}
        w-full  rounded-md shadow-lg p-3 cursor-pointer flex flex-col gap-3`}>
            <div className="w-full p-3 bg-black rounded">
                <h1 className="_display_text">Projeto Desenvolvido</h1>
            </div>
            <div className="flex flex-col gap-1  _text">
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Sites de Notícias e Mídia</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Blogs e Sites de Conteúdo</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Sistemas de agendamento online</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Volume significativo de dados</div>
                {/* <div className="flex gap-1 items-center"><IconX className="text-neon_red" />Primeiros 3 meses grátis</div> */}
                <div className="flex gap-1 items-center"></div>
            </div>
            <div className="w-full flex flex-wrap items-center gap-1 _text _small">
                <div className="text-center bg-purple rounded p-2">+mockup</div>
                <div className="text-center bg-purple rounded p-2">+design</div>
                <div className="text-center bg-purple rounded p-2">+artes</div>
            </div>
        </div>
    )
}

function AdvancedPlanCard({ onChange, isActive }: CardProps) {
    return (

        <div
            onClick={() => onChange("plan3")}
            className={`
            ${isActive ? "bg-gradient-to-tr from-neon_purple to-neon_pink2 " : "bg-gradient-to-r from-contrast_color_2 to-purple"}
        w-full  rounded-md shadow-lg p-3 cursor-pointer flex flex-col gap-3`}>
            <div className="w-full p-3 bg-black rounded">
                <h1 className="_display_text">Grande Porte</h1>
            </div>
            <div className="flex flex-col gap-1  _text">
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Sites de E-commerce (Lojas Virtuais)</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Sistemas de gestão interna (ERPs)</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Volume grande de dados</div>
                <div className="flex gap-1 items-center"></div>
            </div>
            <div className="w-full flex flex-wrap items-center gap-1 _text _small">
                <div className="text-center bg-purple rounded p-2">+mockup</div>
                <div className="text-center bg-purple rounded p-2">+design</div>
                <div className="text-center bg-purple rounded p-2">+artes</div>
            </div>
        </div>
    )
}