"use client";

import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useState } from "react";
import { IconBrandAdobe, IconNotebook } from "@tabler/icons-react";
import PortifolioShowcase from "../portifolio/showcase";
import Intro from "../face/intro";

interface DesignProps {
  data: DesignDTO[];
}

export default function DesignComponent({ data }: DesignProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragThreshold = 30; // Ajuste o limiar de arrasto conforme necessário
    const numItems = 5; // Número total de itens
    if (info.offset.x > dragThreshold && selectedItemIndex > 1) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else if (info.offset.x < -dragThreshold && selectedItemIndex < numItems) {
      setSelectedItemIndex(selectedItemIndex + 1);
    } else if (info.offset.x > dragThreshold && selectedItemIndex === 0) {
      setSelectedItemIndex(numItems); // Se estivermos na primeira página e arrastarmos para a direita, vá para a última página.
    } else if (
      info.offset.x < -dragThreshold &&
      selectedItemIndex === numItems
    ) {
      setSelectedItemIndex(0); // Se estivermos na última página e arrastarmos para a esquerda, vá para a primeira página.
    }
  };

  const variants = {
    hidden: { x: 2000 },
    visible: { x: 0 },
    exit: {
      x: -2000,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };
  const renderItems = () => {
    return data.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.1 }} //Math.abs(selectedItemIndex - index) / 5
        onClick={() => setSelectedItemIndex(index)}
        className={`relative cursor-pointer flex items-center justify-center w-full h-18`}
      >
        <div
          className={`w-full h-full p-5 overflow-hidden transition-all flex gap-3 items-center text-xs z-20 text-nowrap ${
            selectedItemIndex === index
              ? "text-white bg-transparent"
              : "text-zinc-400 "
          }`}
        >
          {/* <Image draggable={false} width={30} color="#ffffff" height={120} src={item.logo} alt={`teste`} /> */}
          <IconNotebook />
          <div
            className={`transition-all mt-1 max-md:text-xs  max-md:hidden ${
              selectedItemIndex === index ? "text-white" : "text-zinc-400"
            }`}
          >
            {item.name}
          </div>
        </div>
        {selectedItemIndex === index && (
          <AnimatePresence>
            {/* <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute left-0 h-full z-10 !bg-gray  w-full  ${
                item.theme === "neon_green2"
                  ? "bg-neon_green2 "
                  : item.theme === "neon_red"
                  ? "bg-neon_red"
                  : item.theme === "neon_purple"
                  ? "bg-neon_purple"
                  : item.theme === "neon_blue"
                  ? "bg-neon_blue"
                  : item.theme === "neon_green"
                  ? "bg-neon_green"
                  : item.theme === "neon_pink"
                  ? "bg-neon_pink"
                  : ""
              }`}
            /> */}
            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              className={`absolute left-0 bottom-0  h-1 z-10 shadow-md   ${
                item.theme === "neon_green2"
                  ? "bg-neon_green2 "
                  : item.theme === "neon_red"
                  ? "bg-neon_red"
                  : item.theme === "neon_purple"
                  ? "bg-neon_purple"
                  : item.theme === "neon_blue"
                  ? "bg-neon_blue"
                  : item.theme === "neon_green"
                  ? "bg-neon_green"
                  : item.theme === "neon_pink"
                  ? "bg-neon_pink"
                  : ""
              }`}
            />
          </AnimatePresence>
        )}
      </motion.div>
    ));
  };
  return (
    <section className="_section relative overflow-hidden mt-10 w-full">
      <div className="flex flex-col items-center w-full  ">
        <div className="flex flex-col items-center z-30">
          <h1 className="text-3xl">Studio</h1>
          <span className="text-base text-zinc-400 normal-case tracking-normal font-poppins">
            O melhor para sua identidade visual
          </span>
        </div>
        <div className="relative flex mt-10 w-full">
          <div className=" w-full h-[80px] relative">
            <AnimatePresence>
              {selectedItemIndex === 0 && (
                <motion.div
                  key="box2"
                  drag="x"
                  onDragEnd={handleDragEnd}
                  variants={variants}
                  dragElastic={0.1}
                  dragConstraints={{
                    top: 0,
                    left: -30,
                    right: 30,
                    bottom: 0,
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                  }}
                  className={`absolute top-0 left-0  w-full h-full flex items-center justify-center `}
                >
                  <div className="relative overflow-hidden flex items-end justify-center w-full z-30 text-3xl">
                    {data[selectedItemIndex].name}
                  </div>
                  <div className={`absolute top-0 h-full w-full bg-${data[selectedItemIndex].theme}`}></div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedItemIndex === 1 && (
                <motion.div
                  key="box2"
                  drag="x"
                  onDragEnd={handleDragEnd}
                  variants={variants}
                  dragElastic={0.1}
                  dragConstraints={{
                    top: 0,
                    left: -30,
                    right: 30,
                    bottom: 0,
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                  }}
                  className={`absolute top-0 left-0  w-full h-full flex items-center justify-center `}
                >
                  <div className="relative overflow-hidden flex items-end justify-center w-full z-30 text-3xl">
                    {data[selectedItemIndex].name}
                  </div>
                  <div className={`absolute top-0 h-full w-full bg-${data[selectedItemIndex].theme}`}></div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedItemIndex === 2 && (
                <motion.div
                  key="box3"
                  drag="x"
                  onDragEnd={handleDragEnd}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  dragElastic={0.1}
                  dragConstraints={{
                    top: 0,
                    left: -30,
                    right: 30,
                    bottom: 0,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                  }}
                  className={`absolute top-0 left-0  w-full h-full flex items-center justify-center `}
                >
                  <div className="relative overflow-hidden flex items-end justify-center w-full z-30 text-3xl">
                    {data[selectedItemIndex].name}
                  </div>
                  <div className={`absolute top-0 h-full w-full bg-${data[selectedItemIndex].theme}`}></div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedItemIndex === 3 && (
                <motion.div
                  key="box3"
                  drag="x"
                  onDragEnd={handleDragEnd}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  dragElastic={0.1}
                  dragConstraints={{
                    top: 0,
                    left: -30,
                    right: 30,
                    bottom: 0,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                  }}
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center `}
                >
                  <div className="relative flex items-end justify-center w-full z-30 text-3xl">
                    {data[selectedItemIndex].name}
                  </div>
                  <div className={`absolute top-0 h-full w-full bg-${data[selectedItemIndex].theme}`}></div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedItemIndex === 4 && (
                <motion.div
                  key="box3"
                  drag="x"
                  onDragEnd={handleDragEnd}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  dragElastic={0.1}
                  dragConstraints={{
                    top: 0,
                    left: -30,
                    right: 30,
                    bottom: 0,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                  }}
                  className={`absolute top-0 left-0  w-full h-full flex items-center justify-center `}
                >
                  <div className="relative overflow-hidden flex items-end justify-center w-full z-30 text-3xl">
                    {data[selectedItemIndex].name}
                  </div>
                  <div className={`absolute top-0 h-full w-full bg-${data[selectedItemIndex].theme}`}></div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedItemIndex === 5 && (
                <motion.div
                  key="box3"
                  drag="x"
                  onDragEnd={handleDragEnd}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  dragElastic={0.1}
                  dragConstraints={{
                    top: 0,
                    left: -30,
                    right: 30,
                    bottom: 0,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                  }}
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center `}
                >
                  <div className="relative overflow-hidden flex items-end justify-center w-full z-30 text-3xl">
                    {data[selectedItemIndex].name}
                  </div>
                  <div className={`absolute top-0 h-full w-full bg-${data[selectedItemIndex].theme}`}></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className={`relative bg-dark w-full text-center h-1`}>
          <div
            className={`absolute top-0 left-0 w-full h-full bg-${data[selectedItemIndex].theme}`}
          ></div>
        </div>

        <div className={` w-full  h-[630px] bg-gray`}>
          <div className="flex w-full h-full">
            <div className="flex flex-col h-full  bg-dark max-md:w-[60px]">
              {renderItems()}
            </div>
            <motion.div
              className={`flex flex-wrap flex-row gap-3 p-2 items-center justify-start  w-full overflow-y-auto`}
            >
              <AnimatePresence>
                {selectedItemIndex >= 0
                  ? data[selectedItemIndex]?.subimages.map(
                      (subimage, index) => (
                        <motion.div
                          key={index}
                          className="relative transition-all  overflow-hidden max-w-[400px]  flex justify-center shadow-lg shadow-dark hover:shadow-none hover:scale-95 cursor-pointer"
                        >
                          <div>
                            <Image
                              className="z-30"
                              width={1000}
                              height={1000}
                              alt=""
                              src={subimage}
                            />
                          </div>
                        </motion.div>
                      )
                    )
                  : null}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
