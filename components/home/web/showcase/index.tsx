import getColor from "@/components/utils/getColor";
import {
  IconCopy,
  IconPointFilled,
  IconSpace,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ItemProps {
  url: string | undefined;
  theme: string;
  key: number | undefined;
}

export default function WebsiteShowcase({ url, theme, key }: ItemProps) {

  const times = [0, 0.2, 0.4, 1, 8.9, 9.1, 9.3, 10]
  const positionsX = [0, 10, 5, 0, -5, -10, 0]
  const positionsY = [0, -8, -10, -15, -10, -8, 0]
  const duration = 10
  return (
    <div className="w-full ">
      <AnimatePresence>
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            type: "spring", stiffness: 80, damping: 10, delay: 0.3
          }}
          className={`relative p-5 flex items-center justify-center w-full max-w-[800px] h-[500px]
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

          <motion.div
          key={`box-${key}`}
            animate={{
              x: positionsX,
              y: positionsY,
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              times: times,
              repeat: Infinity,
              repeatDelay: 0,
            }}
            className={`absolute top-0   w-full h-[85%] z-0 rounded-3xl shadow-2xl shadow-black transition-all
                    ${getColor(theme)}
                    `}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
{/* 
      <div className="flex flex-col max-md:hidden">
        <motion.div
          key={"website-case-2"}
          animate={{
            x: positionsY,
            y: positionsX,
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            times: times,
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className={`w-28 h-48 rounded-full overflow-hidden cursor-pointer ml-24`}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className={`${getColor(
              theme
            )} w-full h-full shadow-lg shadow-dark rounded-full`}
          ></motion.div>
        </motion.div>
        <motion.div
          key={"website-case-1"}
          animate={{
            x: positionsX,
            y: positionsY,
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            times: times,
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className={`w-20 h-36 rounded-full overflow-hidden mt-20`}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className={`${getColor(
              theme
            )} w-full h-full shadow-lg shadow-dark rounded-full cursor-pointer`}
          ></motion.div>
        </motion.div>
      </div> */}
    </div>
  );
}
