"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileShowcase from "./showcase/mobile";
import SliderStepsComponent from "@/components/inc/slider/slider_steps";
import PortifolioShowcase from "./showcase";

interface PortifolioProps {
  web_data: WebDataDTO[];
  web_services: WebServiceDTO[];
}

export default function WebComponent({ web_services,  web_data}: PortifolioProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);
  const [selectedSubItemIndex, setSelectedSubItemIndex] = useState<number>(1);
  const [filteredWebData, setFilteredData] = useState<WebDataDTO[]>()


  useEffect(() => {
    const NewData = web_data.filter(
      (data) => data.service_id === selectedItemIndex
    );
    setFilteredData(NewData)
  }, [selectedItemIndex])

  return (
    <section className="_section relative overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="relative flex w-full">
          <div className=" w-full relative ">
            <SliderStepsComponent
              isAutoPlay
              showControllers={false}
              selectedItem={selectedItemIndex}
              setSelectedItem={setSelectedItemIndex}
              numOfSliders={web_services.length}
              data={web_services}
            />
          </div>
        </div>


        <div className="flex p-5 items-center justify-center min-h-[500px] w-full gap-3 max-md:grid-cols-1">
            <motion.div
              className=""
            >
              <PortifolioShowcase
                url={web_data[selectedItemIndex-1].url}
                theme={web_services[selectedItemIndex-1].theme}
              />
            </motion.div>
        </div>
        <motion.div
          className={`flex gap-5 p-3 w-full items-center  h-full overflow-x-auto ${
            web_services[selectedItemIndex - 1]?.theme === "neon_green2"
              ? "bg-neon_green2"
              : web_services[selectedItemIndex - 1]?.theme === "neon_red"
              ? "bg-gradient-to-tr from-neon_red to-neon_pink"
              : web_services[selectedItemIndex - 1]?.theme === "neon_purple"
              ? "bg-gradient-to-tr from-neon_purple to-neon_blue"
              : web_services[selectedItemIndex - 1]?.theme === "neon_blue"
              ? "bg-neon_blue"
              : web_services[selectedItemIndex - 1]?.theme === "neon_green"
              ? "bg-neon_green"
              : web_services[selectedItemIndex - 1]?.theme === "neon_pink"
              ? "bg-neon_pink"
              : "bg-gray"
          }`}
        >
          <motion.div
          className="flex gap-3 w-full px-10" >
            <AnimatePresence>
              {filteredWebData && filteredWebData.map((subimage, index) => (
                    <motion.div
                      key={index}
                    >
                      <MobileShowcase
                        key={index}
                        wide="mobile"
                        theme={``}
                        url={subimage.subimages[index + 1]}
                      />
                    </motion.div>
                  ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
