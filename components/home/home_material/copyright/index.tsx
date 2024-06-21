
import { motion } from "framer-motion"
import Image from "next/image"
import { WebsiteHyperlink } from "../showcase"
import { IconBrandGithub, IconBrandVercel } from "@tabler/icons-react"




export default function CopyrightCard() {
    return (

        <motion.div className="w-[350px] flex items-center gap-3 _text px-5 flex-col max-md:items-start bg-dark rounded-[20px]">
            <div className="flex gap-3 w-full justify-start">
                <div className="w-14 h-14 overflow-hidden rounded-full">
                    <Image
                        width={1000}
                        height={1000}
                        alt=""
                        src={`/img/colaborates/indicatti.jpg`}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="_text">João Pedro Indicatti</h1>
                    <p className="_text _small text-gray">23 anos</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-white _text font-thin">
                    Desenvolvido e hospedado por{" "}
                    <span className="font-normal">
                        João Pedro Indicatti
                    </span>
                </h1>
                <h1 className="text-palette_gray _text _small font-thin">
                    @direitos reservados ao autor
                </h1>
            </div>
            <div className="flex items-center gap-1 justify-center ">
                <WebsiteHyperlink
                    exhibition="github"
                    icon={<IconBrandGithub />}
                    url="https://github.com/Indicattis"
                />
                <WebsiteHyperlink
                    exhibition="vercel"
                    icon={<IconBrandVercel />}
                    url="https://vercel.com/indicattis-projects"
                />
            </div>
        </motion.div>
    )
}