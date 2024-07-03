
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../utils/Button"
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react"
import Image from "next/image"



interface CaptationEndProps {
    isActive?: boolean
    setStage: React.Dispatch<React.SetStateAction<number>>
    data: OrderDTO | undefined
    client: ClientDTO | undefined
}


export default function CaptationEnd({ isActive, setStage, data, client }: CaptationEndProps) {
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
                    }} className="flex flex-col justify-between items-start gap-5 h-[580px] top-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="_display_text">Quase lá!</h1>
                        <p className="_text text-palette_gray">Confira se todas as informações estão corretas</p>
                    </div>
                    <div className="flex items-center gap-5 p-3 bg-gradient-to-tr from-neon_purple to-neon_blue rounded">
                        {client?.profile_picture ? (
                            <div className="rounded-full overflow-hidden">
                                <Image alt="" src={`${client?.profile_picture ? client?.profile_picture : "/"}`} width={60} height={60} />
                            </div> ) : ("")}

                            <div className="flex flex-col justify-center">
                                <h1 className="_text">{client?.profile_name}</h1>
                                <p className="_text _small ">{client?.profile_mail}</p>
                            </div>
                        </div>

                    <div className="flex flex-col gap-3">
                        <div>
                            <h1 className="_text font-bold">Plano de escolha</h1>
                        </div>
                        <div className="flex gap-3 bg-purple p-3 rounded-full">
                            <p className="_text font-thin">&quot;{data?.projectPlan}&quot;</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="_text font-bold">Meu projeto tem como funcionalidades:</h1>
                        </div>
                        <div className="flex gap-3">
                            {data?.projectServices.map((service, index) => {
                                return (
                                    <div className="bg-purple p-3 rounded-full lowercase" key={"service-map" + index}>#{service}</div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="_display_text">Detalhamento:</h1>
                        </div>
                        <div className="flex gap-3">
                            <p className="_text font-thin">&quot;{data?.projectDescription}&quot;</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <Button.Wide rounded="full" variant="red" wide="lg" onClick={() => { setStage(0) }}>
                            <Button.Icon icon={<IconCaretLeftFilled />} />
                            <Button.Text text="Cancelar" />
                        </Button.Wide>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}