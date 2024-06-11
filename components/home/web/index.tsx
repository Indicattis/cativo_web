"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileShowcase from "./showcase/mobile";
import SliderStepsComponent from "@/components/inc/slider/slider_steps";
import PortifolioShowcase from "./showcase";
import WebsiteShowcase from "./showcase";
import getColor from "@/components/utils/getColor";
import ControllerDefault from "@/components/inc/controllers/default";
import GridComponent, { GridElement } from "../../layout/grid";
import Image from "next/image";
import { IconPointFilled } from "@tabler/icons-react";
import { Colaborate } from "../home-slider/colaborates";
import colaborates_array from "@/data/json/colaborates";

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
      <div className="relative w-full flex justify-center bg-dark overflow-hidden">
        <div className=" max-w-[1080px] flex w-full justify-between p-5  max-lg:flex-col gap-5">
          <div className=" flex flex-col items-start gap-3">
            <h1 className="_display_text">Explore</h1>
            <p className="_text">Veja exemplos de projetos realizados!</p>
          </div>
          <ControllerDefault
            selectedItem={selectedItemIndex}
            setSelectedItem={setSelectedItemIndex}
            numOfSliders={web_services.length}
            data={web_services}
          />
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center overflow-hidden gap-5 bg-dark h-5">
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
      <GridComponent cols={3} rows={2}>
        <GridElement col={2} row={2}>
          <motion.div className="flex gap-5 flex-col items-center justify-center  w-full ">


            {/* Aqui - exibir url do primeiro subitem do item selecionado acima */}

            {filteredWebData.length > 0 && (
              <WebsiteShowcase
                exhibition={filteredWebData[selectedSubItemIndex]?.exhibition}
                key={filteredWebData[selectedSubItemIndex]?.id}
                url={filteredWebData[selectedSubItemIndex]?.url}
                theme={web_services[selectedItemIndex - 1]?.theme}
              />
            )}
            
          </motion.div>
          
        </GridElement>
        <GridElement col={1} row={2}>
          <motion.div
            className={`grid grid-cols-2 gap-3 w-full items-center justify-center h-full max-lg:flex max-lg:overflow-x-auto p-4 ${getColor(
              web_services[selectedItemIndex - 1]?.theme
            )}`}
          >
            {/* Aqui - listar as subimagens do subitem selecionado acima*/}
            {filteredWebData.length > 0 &&
              filteredWebData[selectedSubItemIndex]?.subimages
                .slice(0, 4)
                .map((subimage, index) => (
                  <motion.div key={`mobile-showcase-${index}`}>
                    <MobileShowcase key={index} url={subimage} />
                  </motion.div>
                ))}
          </motion.div>
        </GridElement>
      </GridComponent>

      
      <div className="w-full bg-dark flex justify-center">
        <div className=" max-w-[1080px] w-full">
          <Colaborate age="23" img="/img/colaborates/indicatti.jpg" name="João Pedro Indicatti" role="Desenvolvedor" skills={colaborates_array[0].skills} theme={web_services[selectedItemIndex - 1]?.theme} />
        </div>
      </div>
    </section>
  );
}
