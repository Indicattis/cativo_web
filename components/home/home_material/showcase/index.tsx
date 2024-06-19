import {
  IconBrandGithub,
  IconBrandVercel,
  IconCopy,
  IconPointFilled,
  IconSpace,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Colaborate } from "../../home-slider/colaborates";
import { getColor } from "@/components/utils/getColor";

interface ItemProps {
  url: string | undefined;
  theme: string;
  key: number | undefined;
  exhibition: string | undefined;
}

export default function WebsiteShowcase({ url, theme, key }: ItemProps) {
  return (
      <motion.div
        className={`relative p-5 flex flex-col items-center justify-center w-full max-w-[800px] max-h-[900px] h-full
            `}
      >
    <AnimatePresence>
    <motion.div
        key={`dektopview-`+key}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.3,
        }} 
        className="w-full h-full shadow-lg rounded-3xl overflow-hidden shadow-black max-h-[500px] z-10">
          <div className="bg-dark h-10 p-2 flex justify-between">
            <div className=" flex">
              <IconPointFilled color="#ff0066"></IconPointFilled>
              <IconPointFilled color="#FFF419"></IconPointFilled>
              <IconPointFilled color="#47ff0a"></IconPointFilled>
            </div>
            <div className="flex gap-3">
              <IconSpace width={20} color="rgb(44 47 52)" />
              <IconCopy width={20} color="rgb(44 47 52)" />
              <IconX width={20} color="rgb(44 47 52)" />
            </div>
          </div>

          <div className="h-full max-h-[400px]">
            <Image
            className=""
              priority
              draggable={false}
              src={url ? url : ""}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
    </motion.div>
    </AnimatePresence>
        <motion.div
          key={`box-${key}`}
          className={`absolute top-3  w-full h-full max-h-[400px] z-0 rounded-3xl shadow-2xl shadow-black transition-all max-md:rounded-none max-md:max-h-[300px]
                    ${getColor(theme)}
                    `}
        ></motion.div>

        <motion.div className="w-full flex items-center gap-3 _text  mt-14 max-md:flex-col max-md:items-start p-1">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <Image width={1000} height={1000} alt="" src={`/img/colaborates/indicatti.jpg`}/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-zinc-400 _text font-thin">
              Desenvolvido e hospedado por <span className="font-normal">João Pedro Indicatti</span>
            </h1>
            <h1 className="text-zinc-400 _text _small font-thin">
              @direitos reservados ao autor
            </h1>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <WebsiteHyperlink exhibition="github" icon={<IconBrandGithub/>} theme="gray" url="https://github.com/Indicattis"/>
            <WebsiteHyperlink exhibition="vercel" icon={<IconBrandVercel/>} theme="black" url="https://vercel.com/indicattis-projects"/>
          </div>
        </motion.div>
    </motion.div>
  );
}

type Link = {
  url: string;
  theme: string;
  exhibition: string | undefined;
  icon: React.ReactNode;
}

export function WebsiteHyperlink( { url, theme, exhibition, icon }: Link) {
  return (
    
    <div className={` h-12 px-3 rounded-lg cursor-pointer flex _small gap-2 items-center _text font-medium 
    ${getColor(theme)}`}
    onClick={() => window.location.href = url}
    >
      <div>{icon}</div>
      {/* <h1 className="capitalize">{exhibition}</h1> */}
    </div>
  )
}