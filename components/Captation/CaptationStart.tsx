"use cleent"

import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../utils/Button"
import { IconCaretRightFilled, IconCheck, IconExclamationCircle, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Modal } from "../utils/Modal"


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
                    }} className="flex flex-col justify-between items-start gap-5 min-h-[700px] top-0">

                    <div className="flex flex-col gap-2 w-full">
                        <h1 className="_display_text">Deseja fazer um orçamento?</h1>
                        <p className="_text text-palette_gray">Veja a melhor opção para você!</p>
                    </div>

                    <div className="flex gap-3 w-full items-center border-b border-purple py-5 max-md:flex-col">
                        <BasicPlanCard isActive={planChoice == "plan1"} onChange={setPlanChoice} />
                        <DefaultPlanCard isActive={planChoice == "plan2"} onChange={setPlanChoice} />
                        <AdvancedPlanCard isActive={planChoice == "plan3"} onChange={setPlanChoice} />
                    </div>
                    <div className="w-full flex items-center gap-2">

                        <Button.Wide rounded="full" variant="default" wide="md" onClick={() => { setPlan(planChoice), setStage(1) }}>
                            <Button.Text text="Começar!" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                        <div 
                        onClick={() => setModalActive(true)}
                        className="cursor-pointer _text _small text-contrast_color_3 border-b border-contrast_color_3">Como funcionam os planos?</div>
                    </div>
                </motion.div>
            )}
            {modalActive && (

                <Modal.Root>
                    <Modal.Box>
                        <Modal.Message message={`Planos`}/>
                        <Modal.Content>
                            <p className="_text _small">Cada plano está relacionado a modalidade, sendo: mensal, semestral ou anual que corresponde ao valor de manutenção e hospedagem de um site</p>
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
            ${isActive ? "bg-gradient-to-tr from-neon_purple to-neon_pink2 " : "bg-purple"}
        w-full  rounded-md shadow-lg p-1 cursor-pointer`}>
            <div className="w-full p-3 text-center">
                <h1 className="_display_text">Plano mensal</h1>
            </div>
            <div className="flex flex-col gap-2 p-3 max-md:hidden">
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Hospedagem</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Configuração de cookies</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Manutenções preventivas</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Atualizações de versão</div>
                <div className="flex gap-1 items-center"><IconX className="text-neon_red" />Alterações inclusas</div>
                <div className="flex gap-1 items-center"><IconX className="text-neon_red" />Primeiros 3 meses grátis</div>
                <div className="flex gap-1 items-center"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-3 text-center bg-black rounded">
                <p className="_text">a partir de</p>
                <h1 className="_display_text">149,90/mês</h1>
            </div>
            <div>
                <p className="_text _small text-center py-3 flex gap-2 items-center justify-center"><IconExclamationCircle />Valor de desenvolvimento não incluso</p>
            </div>
        </div>
    )
}


function DefaultPlanCard({ onChange, isActive }: CardProps) {
    return (
        <div
            onClick={() => onChange("plan2")}
            className={`
            ${isActive ? "bg-gradient-to-tr from-neon_purple to-neon_pink2 " : "bg-purple"}
        w-full  rounded-md shadow-lg p-1 cursor-pointer`}>
            <div className="w-full p-3 text-center">
                <h1 className="_display_text">Plano semestral</h1>
            </div>
            <div className="flex flex-col gap-2 p-3 max-md:hidden">
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Hospedagem</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Configuração de cookies</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Manutenções preventivas</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Atualizações de versão</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Alterações inclusas</div>
                <div className="flex gap-1 items-center"><IconX className="text-neon_red" />Primeiros 3 meses grátis</div>
                <div className="flex gap-1 items-center"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-3 text-center bg-black rounded">
                <p className="_text">a partir de</p>
                <h1 className="_display_text">219,90/mês</h1>
            </div>
            <div>
                <p className="_text _small text-center py-3 flex gap-2 items-center justify-center"><IconExclamationCircle />Valor de desenvolvimento não incluso</p>
            </div>
        </div>
    )
}

function AdvancedPlanCard({ onChange, isActive }: CardProps) {
    return (

        <div
            onClick={() => onChange("plan3")}
            className={`
            ${isActive ? "bg-gradient-to-tr from-neon_purple to-neon_pink2 " : "bg-purple"}
        w-full  rounded-md shadow-lg p-1 cursor-pointer`}>
            <div className="w-full p-3 text-center">
                <h1 className="_display_text">Plano anual</h1>
            </div>
            <div className="flex flex-col gap-2 p-3 max-md:hidden">
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Hospedagem</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Configuração de cookies</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Manutenções preventivas</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Atualizações de versão</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Alterações inclusas</div>
                <div className="flex gap-1 items-center"><IconCheck className="text-neon_green2" />Primeiros 3 meses grátis</div>
                <div className="flex gap-1 items-center"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-3 text-center bg-black rounded">
                <p className="_text">a partir de</p>
                <h1 className="_display_text">329,90/mês</h1>
            </div>
            <div>
                <p className="_text _small text-center py-3 flex gap-2 items-center justify-center"><IconExclamationCircle />Valor de desenvolvimento não incluso</p>
            </div>
        </div>
    )
}