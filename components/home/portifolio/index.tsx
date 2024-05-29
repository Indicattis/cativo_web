"use client";

import { useState, useRef } from "react";
import PortifolioShowcase from "./showcase";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import Image from "next/image";
import projects_array from "@/data/json/projects";
import MobileShowcase from "./showcase/mobile";
import { IconNotebook, IconRazorElectric } from "@tabler/icons-react";

interface PortifolioProps {
  data: ProjectDTO[];
}

export default function PortifolioComponent({ data }: PortifolioProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(2);
  const controls = useDragControls()
  

  const renderItems = () => {
    return data.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.1 }} //Math.abs(selectedItemIndex - index) / 5
        onClick={() => setSelectedItemIndex(index)}
        className={`relative cursor-pointer p-2 flex items-center justify-center w-full h-[40px] max-md:h-[40px]`}
      >
        <div
          className={`absolute w-[99%] h-[99%] rounded overflow-hidden transition-all flex gap-1 items-center p-2 text-xs z-20 ${
            selectedItemIndex === index
              ? "text-white bg-transparent"
              : "text-zinc-400 shadow-lg bg-dark"
          }`}
        >
          {/* <Image draggable={false} width={30} color="#ffffff" height={120} src={item.logo} alt={`teste`} /> */}
          <IconNotebook />
          <div
            className={`transition-all mt-1 ${
              selectedItemIndex === index
                ? "text-white"
                : "text-zinc-400 shadow-lg shadow-dark"
            }`}
          >
            {item.name}
          </div>
        </div>
        {selectedItemIndex === index && (
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              className={`absolute left-0 h-full rounded z-10 shadow-md  ${
                item.theme === "neon_green2"
                  ? "bg-neon_green2 shadow-neon_green2"
                  : item.theme === "neon_red"
                  ? "bg-gradient-to-tr from-neon_red to-neon_pink shadow-neon_red"
                  : item.theme === "neon_purple"
                  ? "bg-gradient-to-tr from-neon_purple to-neon_blue shadow-neon_purple"
                  : item.theme === "neon_blue"
                  ? "bg-neon_blue shadow-neon_blue"
                  : item.theme === "neon_green"
                  ? "bg-neon_green shadow-neon_green"
                  : item.theme === "neon_pink"
                  ? "bg-neon_pink shadow-neon_pink"
                  : ""
              }`}
            />
          </AnimatePresence>
        )}
      </motion.div>
    ));
  };

  return (
    <section className="_section relative overflow-hidden mt-10">
      <div className="flex flex-col gap-10 items-center w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Explore</h1>
          <span className="text-base text-zinc-400 normal-case tracking-normal font-poppins">
            Escolha o melhor pra você aqui
          </span>
        </div>
        <motion.div className=" grid grid-cols-2 gap-5 justify-center w-full max-w-[600px] items-center  p-5">
          {renderItems()}
        </motion.div>

        <div className="flex items-center justify-center h-[500px]">
          <AnimatePresence>
            {selectedItemIndex >= 0 && (
              <motion.div
                key={selectedItemIndex}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute"
              >
                <PortifolioShowcase
                  wide="lg"
                  theme={data[selectedItemIndex].theme}
                  url={data[selectedItemIndex].url}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          className={`flex gap-5 p-3 w-full items-center  h-full overflow-x-auto ${
            data[selectedItemIndex]?.theme === "neon_green2"
              ? "bg-neon_green2"
              : data[selectedItemIndex]?.theme === "neon_red"
              ? "bg-gradient-to-tr from-neon_red to-neon_pink"
              : data[selectedItemIndex]?.theme === "neon_purple"
              ? "bg-gradient-to-tr from-neon_purple to-neon_blue"
              : data[selectedItemIndex]?.theme === "neon_blue"
              ? "bg-neon_blue"
              : data[selectedItemIndex]?.theme === "neon_green"
              ? "bg-neon_green"
              : data[selectedItemIndex]?.theme === "neon_pink"
              ? "bg-neon_pink"
              : "bg-dark"
          }`}
        >
          <motion.div
          className="flex gap-3 w-full px-10" >
            <AnimatePresence>
              {selectedItemIndex >= 0
                ? data[selectedItemIndex]?.subimages.map((subimage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: index / 10 }}
                    >
                      <MobileShowcase
                        key={index}
                        wide="mobile"
                        theme={``}
                        url={subimage}
                      />
                    </motion.div>
                  ))
                : null}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
