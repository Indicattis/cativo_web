"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../utils/Button"
import { IconCaretRightFilled } from "@tabler/icons-react"


interface CaptationStart {
    setStage: React.Dispatch<React.SetStateAction<number>>
    setStart: React.Dispatch<React.SetStateAction<boolean>>
    isActive?: boolean
}


export default function CaptationStart({ setStage, setStart, isActive }: CaptationStart) {
    if (isActive) return (
        <AnimatePresence>
            <motion.div
                key={`CaptationServices-anim`}
                initial={{ x: -1400 }}
                animate={{ x: 0 }}
                exit={{ x: 1400 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }} className="flex flex-col justify-around h-full">

                <div className="flex flex-col gap-2">
                    <h1 className="_display_text">Deseja fazer um orçamento?</h1>
                    <p className="_text text-palette_gray">Começe clicando abaixo!</p>
                </div>
        <div className="">

        <Button.Wide rounded="full" variant="default" wide="md" onClick={() => {setStart(true), setStage(1)}}>
            <Button.Text text="Começar!"/>
            <Button.Icon icon={<IconCaretRightFilled/>}/>
        </Button.Wide>
        </div>
            </motion.div>
        </AnimatePresence>
    )
}