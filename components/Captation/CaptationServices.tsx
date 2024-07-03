import Services from "@/data/json/services"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled, IconCheck } from "@tabler/icons-react"

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
                    }} className="flex flex-col gap-5 w-full justify-between h-[580px]">
                    <div>
                        <div className="flex flex-col gap-3">
                            <h1 className="_display_text">Qual o intuito do seu projeto?</h1>
                            <p className="_text text-palette_gray">Selecione as categorias que melhor representam a sua finalidade.</p>
                        </div>
                    </div>
                    <div className=" flex gap-3 flex-wrap w-full justify-start items-center border-b border-purple py-5">
                        {Services.map((service, index) => {
                            return (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                    }}
                                    exit={{ scale: 0 }}
                                    transition={{ delay: index * .1 }}
                                    onClick={() => toggleService(service.description)}
                                    key={`captation-service-` + index}
                                    className={`relative _text cursor-pointer flex items-center  justify-start text-center p-3 gap-3 font-thin rounded shadow-md ${selectedServices.includes(service.description) ? 'bg-gradient-to-tr from-neon_purple to-neon_pink2 ' : 'bg-purple'}`}>
                                    <div className="w-5 h-5 border rounded"></div>
                                    {selectedServices.includes(service.description) ? (<motion.div initial={{scale:0}} animate={{scale:1}} className="absolute"><IconCheck/></motion.div>) : ""}
                                    {service.description}
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="flex gap-3">
                        <Button.Wide rounded="full" variant="disabled" wide="lg" onClick={() => { setProjectServices(selectedServices), setStage(0) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Anterior" />
                        </Button.Wide>
                        <Button.Wide rounded="full" variant="default" wide="lg" onClick={() => { setProjectServices(selectedServices), setStage(2) }}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
