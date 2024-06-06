"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileShowcase from "./showcase/mobile";
import SliderStepsComponent from "@/components/inc/slider/slider_steps";
import PortifolioShowcase from "./showcase";
import WebsiteShowcase from "./showcase";
import getColor from "@/components/utils/getColor";

interface PortifolioProps {
  web_data: WebDataDTO[];
  web_services: WebServiceDTO[];
}

export default function WebComponent({
  web_services,
  web_data,
}: PortifolioProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);
  const [selectedSubItemIndex, setSelectedSubItemIndex] = useState<number>(0);
  const [filteredWebData, setFilteredData] = useState<WebDataDTO[]>([]);

  useEffect(() => {
    const newData = web_data.filter(
      (data) => data.service_id === selectedItemIndex
    );
    setFilteredData(newData);
  }, [selectedItemIndex, web_data]);

  return (
    <section className="_section relative overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="relative flex w-full">
          <div className="w-full relative">
            {/* Aqui - são exibidos os itens principais do array web_services */}
            <SliderStepsComponent
              isAutoPlay
              showControllers
              selectedItem={selectedItemIndex}
              setSelectedItem={setSelectedItemIndex}
              numOfSliders={web_services.length}
              data={web_services}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <span className="mt-1 text-2xl">Explore</span>
          <p className="text-sm font-poppins normal-case tracking-wide text-zinc-400">
            Escolha o melhor para o seu perfil!
          </p>
        </div>
        <div className="flex flex-col p-5 items-center justify-center min-h-[500px] w-full gap-3">
          <motion.div className="flex gap-5">
            {/* Aqui - exibir url do primeiro subitem do item selecionado acima */}

            {filteredWebData.length > 0 && (
              <WebsiteShowcase
                key={filteredWebData[selectedSubItemIndex]?.id}
                url={filteredWebData[selectedSubItemIndex]?.url}
                theme={web_services[selectedItemIndex - 1]?.theme}
              />
            )}
            
          </motion.div>

          <div className="flex gap-3">
            {filteredWebData.length > 0 &&
              filteredWebData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedSubItemIndex(index)}
                >
                  <div
                    className={`w-10 h-1 cursor-pointer rounded-full ${
                      selectedSubItemIndex == index ? "bg-white" : "bg-zinc-400"
                    }`}
                  ></div>
                </motion.div>
              ))}
          </div>
        </div>
        <motion.div
          className={`flex gap-5 p-3 w-full items-center h-full overflow-x-auto ${getColor(
            web_services[selectedItemIndex - 1]?.theme
          )}`}
        >
          <motion.div className="flex gap-3 w-full px-10">
            {/* Aqui - listar as subimagens do subitem selecionado acima*/}
            {filteredWebData.length > 0 &&
              filteredWebData[selectedSubItemIndex]?.subimages.map(
                (subimage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <MobileShowcase wide="mobile" url={subimage} />
                  </motion.div>
                )
              )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
