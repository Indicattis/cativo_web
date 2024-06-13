import {
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
    <AnimatePresence>
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.3,
        }}
        className={`relative p-5 flex items-center justify-center w-full max-w-[800px] max-h-[900px] h-full
            `}
      >
        <motion.div className="w-full h-full shadow-lg rounded-3xl overflow-hidden shadow-black  z-10">
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
              priority
              draggable={false}
              src={url ? url : ""}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </motion.div>

        {/* <motion.div
          key={`box-${key}`}
          className={`absolute top-0  w-full h-[85%] z-0 rounded-3xl shadow-2xl shadow-black transition-all max-md:rounded-none
                    ${getColor(theme)}
                    `}
        ></motion.div> */}

      </motion.div>
    </AnimatePresence>
  );
}
