"use client"

import { IconCaretLeftFilled, IconCaretRightFilled, IconWriting } from "@tabler/icons-react";
import { Button } from "../../utils/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/utils/Input";



interface CaptationDescriptionProps {
    isActive?: boolean
    setStage: React.Dispatch<React.SetStateAction<number>>
    setProjectDescription: React.Dispatch<React.SetStateAction<string>>
}

export default function CaptationDescription({ isActive, setProjectDescription, setStage }: CaptationDescriptionProps) {
    const [description, setDescription] = useState<string>("")
    return (

        <AnimatePresence>
            {isActive && (

                <motion.div
                    key={`CaptationDescription-anim`}
                    initial={{ x: 1500, position: "absolute"  }}
                    animate={{ x: 0, position: "initial"  }}
                    exit={{ x: -1500, position: "absolute" }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50
                    }} className="flex flex-col justify-between h-full items-center">
                    <div className="flex flex-col gap-2 w-full items-center">
                        <h1 className="_display_text">Fale mais sobre seu projeto:</h1>
                        <p className="_text text-palette_gray">Descreva em uma frase a ideia do seu site</p>
                    </div>
                        <motion.div 
                        animate={{borderRadius: description != "" ? 5 : 100}}
                        className="bg-purple p-3  text-wrap max-w-[330px] _text">
                            {description != "" ? description : <IconWriting/> }
                            
                        </motion.div>
                    {/* <textarea onChange={(e) => setDescription(e.target.value)} placeholder="A minha ideia é...." className="bg-transparent w-96 outline-none _text border border-purple p-3 focus:border-neon_purple rounded " /> */}
                       <div className="w-96">
                            <Input.Root>
                                <Input.Box onChange={setDescription} placehoder="A minha ideia é..." />
                            </Input.Root>
                        </div> 
                    <div className="w-full flex items-center justify-between gap-2 border-t border-purple py-5">

                        <Button.Wide rounded="full" variant="disabled" wide="lg" onClick={() => { setStage(1) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Anterior" />
                        </Button.Wide>
                        <Button.Wide rounded="full" variant="default" wide="lg" onClick={() => { setProjectDescription(description), setStage(3) }}>
                            <Button.Text text="Próximo" />
                            <Button.Icon icon={<IconCaretRightFilled />} />
                        </Button.Wide>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}