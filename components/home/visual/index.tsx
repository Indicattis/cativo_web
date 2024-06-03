"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconNotebook, IconPlus } from "@tabler/icons-react";
import SliderComponent from "@/components/inc/slider";
import VisualizerComponent from "@/components/inc/visualizer";

interface VisualProps {
  visual_data: VisualDataDTO[];
  visual_services: VisualServiceDTO[];
}

export default function VisualComponent({ visual_data, visual_services }: VisualProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 18;
  const [showVisualizer, setShowVisualizer] = useState<VisualDataDTO>()

  const renderItems = () => {
    return visual_services.map((item, index) => (
      <motion.div
        key={index + 1}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.1 }} //Math.abs(selectedItemIndex - index) / 5
        onClick={() => {
          setSelectedItemIndex(index + 1);
          setCurrentPage(1); // Reset page to 1 when selecting a new item
        }}
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

  const filteredData = visual_data.filter(data => data.service_id === selectedItemIndex);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="_section relative overflow-hidden mt-10 w-full">
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col items-center z-30">
          <h1 className="text-3xl">sua marca</h1>
          <span className="text-base text-zinc-400 normal-case tracking-normal font-poppins">
            Crie sua identidade visual
          </span>
        </div>
        <div className="relative flex mt-10 w-full">
          <div className=" w-full h-[80px] relative">
            <SliderComponent showControllers={false} selectedItem={selectedItemIndex} setSelectedItem={setSelectedItemIndex} numOfSliders={6} data={visual_services} />
          </div>
        </div>

        <div className={` w-full bg-dark  max-w-[1080px]`}>
          <div className="flex w-full h-full">
            <div className="flex flex-col h-full bg-dark max-md:w-[60px] max-sm:hidden">
              {renderItems()}
            </div>
            <motion.div
              className={`grid grid-cols-3 h-min gap-3 p-2 w-full`}
            >
              <AnimatePresence>
                {paginatedData.map((item, index) => (
                  <VisualItem select={setShowVisualizer} visual_data={item}/>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        {filteredData.length > itemsPerPage && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage * itemsPerPage >= filteredData.length}
              className="px-4 py-2 mx-1 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
      {showVisualizer !== undefined ? (
        <VisualizerComponent data={showVisualizer} onClose={() => setShowVisualizer(undefined)}/>
      ) : null}
    </section>
  );
}



interface VisualItemProps {
  visual_data: VisualDataDTO;
  select: (data: VisualDataDTO) => void
}

function VisualItem({visual_data, select}: VisualItemProps) {
  return (
          <motion.div
            className="relative h-full transition-all max-w-[400px] justify-center shadow-lg shadow-black cursor-pointer grid grid-cols-2 bg-dark"
            onClick={() => select(visual_data)}>
              <Image
                className="z-30 w-full object-cover h-full border-2 border-white"
                width={1000}
                height={1000}
                alt=""
                src={visual_data.subimages[0]}
              />
              <Image
                className="z-30 w-full object-cover h-full border-2 border-white"
                width={1000}
                height={1000}
                alt=""
                src={visual_data.subimages[1]}
              />
              <Image
                className="z-30 w-full object-cover h-full border-2 border-white"
                width={1000}
                height={1000}
                alt=""
                src={visual_data.subimages[2]}
              />
              <div className="relative w-full h-full font-poppins flex justify-center visual_datas-center border-2 border-white">
                <div className="z-30 flex justify-center visual_datas-center ">
                  <IconPlus/> 
                  {visual_data.subimages.length >= 4 ? visual_data.subimages.length - 3 : ""}
                </div>
                  <Image
                  className=" w-full object-cover h-full absolute top-0 opacity-25"
                  width={1000}
                  height={1000}
                  alt=""
                  src={visual_data.subimages[1]}
                />
              </div>
              
              {/* {showVisualizer !== undefined ? (
                <VisualizerComponent data={item} onClose={() => setShowVisualizer(undefined)}/>
              ) : null} */}
          </motion.div>
  )
}