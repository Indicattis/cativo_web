"use client";

import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useState } from "react";
import { IconNotebook } from "@tabler/icons-react";
import SliderComponent from "@/components/inc/slider";

interface DesignProps {
  data: DesignDTO[];
}

export default function DesignComponent({ data }: DesignProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);


  const renderItems = () => {
    return data.map((item, index) => (
      <motion.div
        key={index + 1}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.1 }} //Math.abs(selectedItemIndex - index) / 5
        onClick={() => setSelectedItemIndex(index + 1)}
        className={`relative cursor-pointer flex items-center justify-center w-full h-18`}
      >
        <div
          className={`w-full h-full p-5 overflow-hidden transition-all flex gap-3 items-center text-xs z-20 text-nowrap ${
            selectedItemIndex === item.id
              ? "text-white bg-transparent"
              : "text-zinc-400 "
          }`}
        >
          {/* <Image draggable={false} width={30} color="#ffffff" height={120} src={item.logo} alt={`teste`} /> */}
          <IconNotebook />
          <div
            className={`transition-all mt-1 max-md:text-xs  max-md:hidden ${
              selectedItemIndex === item.id ? "text-white" : "text-zinc-400"
            }`}
          >
            {item.exhibition}
          </div>
        </div>
        {selectedItemIndex === item.id && (
          <AnimatePresence>
            <motion.div
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
            />
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
            <SliderComponent showControllers={false} selectedItem={selectedItemIndex} setSelectedItem={setSelectedItemIndex} numOfSliders={6} data={data}/>
          </div>
        </div>

        <div className={` w-full  h-[630px] bg-gray`}>
          <div className="flex w-full h-full">
            <div className="flex flex-col h-full  bg-dark max-md:w-[60px]">
              {renderItems()}
            </div>
            <motion.div
              className={`
              grid grid-cols-3 h-min
              gap-3 p-2  w-full`}
            >
              <AnimatePresence>
                {selectedItemIndex >= 1
                  ? data[selectedItemIndex - 1]?.subimages.map(
                      (subimage, index) => (
                        <motion.div
                          key={index}
                          className="relative transition-all overflow-hidden max-w-[400px]  flex justify-center shadow-lg shadow-dark hover:shadow-none hover:scale-95 cursor-pointer"
                        >
                          <div className="flex items-center justify-center">
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
