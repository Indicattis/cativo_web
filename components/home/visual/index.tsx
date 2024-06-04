"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconNotebook, IconPlus } from "@tabler/icons-react";
import SliderComponent from "@/components/inc/slider";
import SliderImagesComponent from "@/components/inc/slider/slider_images";
import ModalComponent from "@/components/inc/modal";
import SliderStepsComponent from "@/components/inc/slider/slider_steps";

interface VisualProps {
  visual_data: VisualDataDTO[];
  visual_services: VisualServiceDTO[];
}

export default function VisualComponent({
  visual_data,
  visual_services,
}: VisualProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);
  const [showVisualizer, setShowVisualizer] = useState<VisualDataDTO>();
  const [controller, setController] = useState<number>(1);


  const filteredData = visual_data.filter(
    (data) => data.service_id === selectedItemIndex
  );

  const paginatedData = filteredData
  return (
    <section className="_section relative overflow-hidden w-full">
      <div className="flex flex-col items-center w-full h-full">
        <div className="relative flex w-full">
          <div className=" w-full relative ">
            <SliderStepsComponent
              isAutoPlay={false}
              showControllers
              selectedItem={selectedItemIndex}
              setSelectedItem={setSelectedItemIndex}
              numOfSliders={visual_services.length}
              data={visual_services}
            />
          </div>
        </div>

        <div className={`relative w-[1080px] bg-dark  min-h-screen max-lg:w-full`}>
          <motion.div className={`  w-full grid grid-cols-3 justify-center items-center`}>
            {/* AQUI */}
              {paginatedData.map((item, index) => (
                <VisualItem
                  key={index}
                  select={setShowVisualizer}
                  visual_data={item}
                />
              ))}
          </motion.div>
        </div>
      </div>
      {showVisualizer !== undefined ? (
        <ModalComponent onClose={() => {setShowVisualizer(undefined), setController(1)}}>
          <SliderImagesComponent
            showControllers
            selectedItem={controller}
            setSelectedItem={setController}
            numOfSliders={showVisualizer.subimages.length - 1}
            data={showVisualizer.subimages}
          />
        </ModalComponent>
      ) : null}
    </section>
  );
}

interface VisualItemProps {
  visual_data: VisualDataDTO;
  select: (data: VisualDataDTO) => void;
}

function VisualItem({ visual_data, select }: VisualItemProps) {
  return (
    <motion.div
      className="relative h-full transition-all w-full justify-center shadow-lg shadow-black cursor-pointer grid grid-cols-2 bg-dark border border-white hover:opacity-55"
      onClick={() => select(visual_data)}
    >
      <Image
        draggable={false}
        className="z-30 w-full object-cover h-full"
        width={1000}
        height={1000}
        alt=""
        src={visual_data.subimages[0]}
      />
      <Image
        draggable={false}
        className="z-30 w-full object-cover h-full"
        width={1000}
        height={1000}
        alt=""
        src={visual_data.subimages[1]}
      />
      <Image
        draggable={false}
        className="z-30 w-full object-cover h-full"
        width={1000}
        height={1000}
        alt=""
        src={visual_data.subimages[2]}
      />
      <div className="relative w-full h-full font-poppins flex justify-center">
        <div className="z-30  flex justify-center items-center">
          {visual_data.subimages.length >= 4 ? (
            <div className=" flex justify-center items-center">
              <IconPlus />
              {visual_data.subimages.length - 3}
            </div>
          ) : (
            ""
          )}
        </div>
        <Image
          draggable={false}
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
  );
}
