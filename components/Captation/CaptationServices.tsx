import Services from "@/data/json/services"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react"

interface CaptationServicesProps {
    setProjectServices: React.Dispatch<React.SetStateAction<string[]>>
    isActive?: boolean
    setStage: React.Dispatch<React.SetStateAction<number>>
}

export default function CaptationServices({ setProjectServices, isActive, setStage }: CaptationServicesProps) {
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const toggleService = (serviceDescription: string) => {
        setSelectedServices((prevSelectedServices) => {
            if (prevSelectedServices.includes(serviceDescription)) {
                return prevSelectedServices.filter(service => service !== serviceDescription)
            } else {
                return [...prevSelectedServices, serviceDescription]
            }
        })
    }

    return (
        <AnimatePresence>
            {isActive && (

                <motion.div
                    key={`CaptationServices-anim`}
                    initial={{ x: 1500, position: "absolute" }}
                    animate={{ x: 0, position: "initial" }}
                    exit={{ x: -1500, position: "absolute" }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50
                    }} className="flex flex-col gap-5 w-full justify-between min-h-[700px]">
                    <div>
                        <div className="flex flex-col gap-3">
                            <h1 className="_display_text">Qual o intuito do seu projeto?</h1>
                            <p className="_text text-palette_gray">Selecione as categorias que definam as funcionalidades do seu projeto</p>
                            <p className="_text text-palette_gray">* o preço da mensalidade pode varias de acordo com a quantidade de funcionalidades necessárias.</p>
                        </div>
                    </div>
                    <div className=" flex gap-3 flex-wrap w-full justify-start items-center border-b border-purple py-5">
                        {Services.map((service, index) => {
                            return (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                        height: 60,
                                        width: 180
                                    }}
                                    exit={{ scale: 0 }}
                                    transition={{ delay: index * .1 }}
                                    onClick={() => toggleService(service.description)}
                                    key={`captation-service-` + index}
                                    className={`cursor-pointer flex items-center justify-center text-center p-3 te font-bold rounded-full shadow-md ${selectedServices.includes(service.description) ? 'bg-gradient-to-tr from-neon_purple to-neon_pink2 ' : 'bg-purple'}`}>
                                    {service.description}
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="flex gap-3">
                        <Button.Wide rounded="full" variant="disabled" wide="md" onClick={() => { setProjectServices(selectedServices), setStage(0) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Anterior" />
                        </Button.Wide>
                        <Button.Wide rounded="full" variant="default" wide="md" onClick={() => { setProjectServices(selectedServices), setStage(2) }}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
