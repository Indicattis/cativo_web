
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandVercel } from "@tabler/icons-react"
import { useEffect, useState } from "react"




export default function PersonalCard() {
    const [selectedItem, setSelectedItem] = useState<number | null>(null)



    return (

        <motion.div className="w-full flex flex-col items-center gap-1 justify-center">

            <div className="w-full h-full flex flex-col justify-start gap-10">


                <div className="grid grid-cols-3 grid-rows-2  w-full justify-center items-center gap-5 h-[620px]">

                    <TextCard isSelected={selectedItem == 1} id={1} onItemClick={setSelectedItem} className="col-span-2" url_image={`/img/about-1.jpg`} text="Meu nome é João Pedro e trabalho no desenvolvimento de
                    aplicações web utilizando diversas ferramentas tanto para
                    desenvolvimento, quanto deploy e hospedagem."/>
                    <TextCard isSelected={selectedItem == 2} id={2} onItemClick={setSelectedItem}   className="" url_image={`/img/about-2.jpg`} text="Faço uso dos serviços da Amazon Cloud Service (AWS) como EC2
                    e RDS para databases e hospedagem. Também utilizo github com a
                    vercel para deploy teste de aplicações."/>

                    <TextCard isSelected={selectedItem == 3} id={3} onItemClick={setSelectedItem}   className=""  url_image={`/img/about-1.jpg`} text="Tenho grande anseio pela área do desenvolvimento e sempre
                    busco por mais conhecimento para ampliar minhas capacidades e
                    ferramentas."/>
                    <TextCard isSelected={selectedItem == 4} id={4} onItemClick={setSelectedItem}  className="col-span-2" url_image={`/img/about-1.jpg`} text="Meu nome é João Pedro e trabalho no desenvolvimento de
                    aplicações web utilizando diversas ferramentas tanto para
                    desenvolvimento, quanto deploy e hospedagem."/>

                </div>


            </div>


        </motion.div>
    )
}


type CardProps = {
    id: number
    text: string
    url_image: string
    className?: string
    onItemClick: (id: number | null) => void
    isSelected: boolean
}

function TextCard({ id, text, url_image, className, onItemClick, isSelected }: CardProps) {
    return (
        <motion.div
            whileTap={{scale: 0.95}}
            className={`h-full p-3 bg-palette_dark rounded-md cursor-pointer shadow-lg shadow-purple relative overflow-hidden flex flex-col justify-center items-center `+ className}>
                
                <motion.div
                animate={{
                    scale: isSelected ? 1 : 0,
                    opacity: isSelected ? 1 : 0,

                }}
                onClick={() => onItemClick(null)}
                className="absolute top-28  w-10 h-10  rounded-full flex items-center justify-center bg-contrast_color_1 opacity-55 z-[51]">
                    <span className="text-white _text">X</span>
                </motion.div>
            <div
            onClick={() => onItemClick(id)} className="absolute top-0 left-0 h-full w-full">
                <Image alt="" src={url_image} width={10000} height={10000} />

            </div>
            <div onClick={() => onItemClick(id)} className=" p-3 w-full absolute left-0 bottom-0 bg-palette_dark overflow-hidden flex items-center justify-center">
                <motion.div
                animate={{height: isSelected ? 120 : 60}} 
                className={`relative w-full`}>

                    <motion.div
                        key={`text-grid-box-10`}
                        initial={{ width: 0, height: 0 }}
                        animate={{ width: isSelected ? "100%" : 0, height: isSelected ? 120 : 0 }}
                        className="absolute  bottom-0 bg-contrast_color_2 rounded-lg z-50"
                    >

                        <motion.p
                            key={`text-grid-box`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: isSelected ? 1 : 0, height: isSelected ? 120 : 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ opacity: { delay: 0.2 } }}
                            className="_text _small text-white font-thin rounded z-50 p-1"
                        >
                            {text}

                        </motion.p>
                    </motion.div>
                    {!isSelected && (


                        <div className="absolute bottom-0 h-[60px] w-full  gap-2 grid grid-cols-3 grid-rows-3 justify-center items-center">
                            <motion.span
                                key={`text-grid-box-1`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    damping: 50
                                }}
                                className={`col-span-2 rounded-full bg-contrast_color_2 h-full w-full`}> </motion.span>
                            <motion.span
                                key={`text-grid-box-2`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    damping: 50,
                                    delay: 0.1
                                }} className=" row-span-2 rounded-lg bg-contrast_color_3 h-full w-full"> </motion.span>
                            <motion.span
                                key={`text-grid-box-3`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    damping: 50,
                                    delay: 0.2
                                }} className=" rounded-full bg-contrast_color_1 h-full w-full"> </motion.span>
                            <motion.span
                                key={`text-grid-box-4`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    damping: 50,
                                    delay: 0.3
                                }} className=" rounded-full bg-contrast_color_2 h-full w-full"> </motion.span>
                            <motion.span
                                key={`text-grid-box-5`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    damping: 50,
                                    delay: 0.4
                                }} className=" col-span-3 rounded-full bg-contrast_color_4 h-full w-full"> </motion.span>
                        </div>
                    )}
                </motion.div>

            </div>

        </motion.div>
    )
}







                {/* <div className="flex gap-3 w-full items-center justify-center max-lg:flex-col" >
                    <div className="w-full flex gap-3 items-center justify-between max-lg:flex-col">
                        <div className="w-[150px] h-[110px] overflow-hidden rounded-full border-2 border-[#2E3D75]">
                            <Image
                                className=""
                                width={1000}
                                height={1000}
                                alt=""
                                src={`/img/colaborates/indicatti.jpg`}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1 w-full max-lg:items-center">
                            <h1 className="_display_text">João Pedro Indicatti</h1>
                            <p className="_text text-neon_purple">Desenvolvedor Web</p>
                        </div>
                    </div>

                    <motion.div
                        className=" flex  items-center gap-3 justify-center p-1  h-14 rounded-xl">
                        <div className="rounded-lg bg-zinc-950 w-12 h-12 flex items-center justify-center">
                            <IconBrandGithub />
                        </div>
                        <div className="rounded-lg bg-palette_black w-12 h-12 flex items-center justify-center">
                            <IconBrandVercel />
                        </div>
                        <div className="rounded-lg bg-neon_red w-12 h-12 flex items-center justify-center">
                            <IconBrandInstagram />
                        </div>
                        <div className="rounded-lg bg-neon_blue w-12 h-12 flex items-center justify-center">
                            <IconBrandLinkedin />
                        </div>
                    </motion.div>
                </div>

 */}
