"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileShowcase from "./showcase/mobile";
import SliderStepsComponent from "@/components/inc/slider/slider_steps";
import PortifolioShowcase from "./showcase";
import WebsiteShowcase from "./showcase";
import ControllerDefault from "@/components/inc/controllers/default";
import GridComponent, { GridElement } from "../../layout/grid";
import Image from "next/image";
import { IconCaretDown, IconDeviceMobile, IconInfoSquare, IconListCheck, IconPointFilled } from "@tabler/icons-react";
import { Colaborate } from "../home-slider/colaborates";
import colaborates_array from "@/data/json/colaborates";
import SelectDefault from "@/components/layout/select";
import { getColor } from "@/components/utils/getColor";

interface PortifolioProps {
  web_data: WebDataDTO[];
  web_services: WebServiceDTO[];
}

export default function MaterialComponent({
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
    <section className={`_section relative overflow-hidden `}>
      <div className="relative w-full flex justify-center bg-gray overflow-hidden">
        <div className=" max-w-[1080px] flex w-full justify-between p-5  max-lg:flex-col gap-5 border-b border-gray">
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
        <div className="flex">
          <div className="text-gray">
            <IconInfoSquare/>
          </div>
        </div>
      </div>

      <div className={`relative w-full flex justify-center items-center overflow-hidden gap-5  h-5 `}>
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
      <GridComponent cols={2} rows={2}>
        <GridElement col={2} row={1}>
          <motion.div className={`flex gap-10 justify-center  w-full min-h-[700px] max-w-[1080px] max-md:flex-col-reverse py-10 `}>

            <motion.div className="flex flex-col gap-5 w-[300px] p-3 max-md:p-5 max-md:w-full">
              <h1 className="_display_text flex flex-col gap-2 justify-center">
                <span className="flex gap-2"><IconListCheck></IconListCheck>Especificações</span>
                <span className="_text _small font-light text-zinc-400">Propriedades de desenvolvimento</span>
              </h1>
              <div className="flex flex-col gap-3">

              <SelectDefault theme={web_services[selectedItemIndex - 1]?.theme} exhibition="Tecnologias" itens={["Node JS","ReactJS","Typescript"]}/>
              <SelectDefault theme={web_services[selectedItemIndex - 1]?.theme}  exhibition="Hospedagem" itens={["AWS EC2","Domínio próprio","Firewall de rede"]}/>
              <SelectDefault theme={web_services[selectedItemIndex - 1]?.theme}  exhibition="Design" itens={["Tailwind CSS","Framer Motion","Next Image"]}/>
              <SelectDefault theme={web_services[selectedItemIndex - 1]?.theme}  exhibition="Segurança" itens={["Backups","Appache","Certificado SSL"]}/>
              </div>

            </motion.div>

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
        <GridElement col={2} row={1}>
          
          
              
              <h1 className="absolute top-5 _display_text flex flex-col gap-2 items-center w-full">
                <div className="flex gap-2 items-center"><IconDeviceMobile></IconDeviceMobile>Dispositivos móveis</div>
                <span className="_text  font-light text-white">Responsividade</span>
              </h1>
          <motion.div
            className={`gap-3 w-full items-center justify-center h-full flex overflow-x-auto p-1 py-16 ${getColor(
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

      
      <div className="w-full bg-gray flex justify-center">
        <div className=" max-w-[1080px] w-full">
          <Colaborate age="23" img="/img/colaborates/indicatti.jpg" name="João Pedro Indicatti" role="Desenvolvedor" skills={colaborates_array[0].skills} theme={web_services[selectedItemIndex - 1]?.theme} />
        </div>
      </div>
    </section>
  );
}
