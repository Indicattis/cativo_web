import Services from "@/data/json/services"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../utils/Button"
import { IconCaretRightFilled } from "@tabler/icons-react"

interface CaptationServicesProps {
    setProjectServices: React.Dispatch<React.SetStateAction<string[]>>
    isActive?: boolean
    setStage: React.Dispatch<React.SetStateAction<number>>
}

export default function CaptationServices({setProjectServices, isActive, setStage}: CaptationServicesProps) {
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

    if (isActive) return (
        <AnimatePresence>
        <motion.div 
        key={`CaptationServices-anim`}
            initial={{x: -1400}}
            animate={{x: 0}}
            exit={{x: 1400}}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
            }}
            className="flex flex-col justify-around h-full">
                <div className="flex flex-col gap-2">
                <h1 className="_display_text">Seleção de funcionalidades:</h1>
                <p className="_text text-palette_gray">Selecione as categorias que definam as funcionalidades do seu projeto</p>
                </div>
                <div className=" flex gap-3 flex-wrap w-[650px]">
                    {Services.map((service, index) => {
                        return (
                            <motion.div
                            animate={{backgroundColor: selectedServices.includes(service.description) ? '#2E3D75' : 'rgb(21 28 54)'}} 
                            onClick={() => toggleService(service.description)}
                            key={`captation-service-`+ index} 
                            className={`cursor-pointer p-3  font-bold rounded-full lowercase shadow-md ${selectedServices.includes(service.description) ? 'shadow-contrast_color_2' : 'bg-purple'}`}>
                                #{service.description}
                            </motion.div>
                        )
                    })}
                </div>
                <div className="">

                <Button.Wide rounded="full" variant="default" wide="md" onClick={() => {setProjectServices(selectedServices), setStage(2)}}>
                    <Button.Text text="Próximo"/>
                    <Button.Icon icon={<IconCaretRightFilled/>}/>
                </Button.Wide>
                </div>

            </motion.div>
        </AnimatePresence>
    )
}
