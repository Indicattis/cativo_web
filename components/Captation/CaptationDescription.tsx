"use client"

import { IconCaretRightFilled } from "@tabler/icons-react";
import { Button } from "../utils/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



interface CaptationDescriptionProps {
    isActive?: boolean
    setStage: React.Dispatch<React.SetStateAction<number>>
    setProjectDescription: React.Dispatch<React.SetStateAction<string>>
}

export default function CaptationDescription ({isActive, setProjectDescription, setStage}: CaptationDescriptionProps) {
    const [description, setDescription] = useState<string>("")
    if (isActive) return(
        
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
            }}className="flex flex-col justify-around h-full">
        <div className="flex flex-col gap-2">
        <h1 className="_display_text">Fale mais sobre seu projeto:</h1>
        <p className="_text text-palette_gray">Descreva em uma frase a ideia do seu site</p>
        </div>
        <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Eu quero um site..." className="h-[140px] bg-transparent outline-none w-full border border-purple p-3 focus:border-neon_purple rounded " />
        <div className="">

        <Button.Wide rounded="full" variant="default" wide="md" onClick={() => {setProjectDescription(description), setStage(2)}}>
            <Button.Text text="Próximo"/>
            <Button.Icon icon={<IconCaretRightFilled/>}/>
        </Button.Wide>
        </div>

        </motion.div>
    </AnimatePresence>
    )
}