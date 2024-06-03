import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useState } from "react";
import SliderComponent from "../slider";
import SliderImagesComponent from "../slider/slider_images";

interface VisualizarProps {
  data: any;
  onClose: () => void;
}

export default function VisualizerComponent({
  data,
  onClose,
}: VisualizarProps) {
  const [controller, setController] = useState<number>(1);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragThreshold = 30; // Ajuste o limiar de arrasto conforme necessário
    if (info.offset.y > dragThreshold) {
        onClose()
    }
};


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        y: -2000,
        transition: {
            duration: 1,
            delay: 0,
        },
    },
};

  return (
    <AnimatePresence>

<motion.div 
    drag="y"
    onDragEnd={handleDragEnd}
    variants={variants}
    dragSnapToOrigin
    dragConstraints={{
        top: 0,
      }}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="_modal_display">
      <div className="_modal max-md:w-full">
        <div className=" flex flex-col gap-64 w-full justify-around h-screen ">
          <div className="w-full max-w-[90%] flex gap-3 items-center">
            <SliderImagesComponent
              showControllers={false}
              selectedItem={controller}
              setSelectedItem={setController}
              numOfSliders={data.subimages.length - 1}
              data={data.subimages}
            />
          </div>
          <div className="flex gap-1">
            {data.subimages.map((image: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`w-full h-full flex justify-center items-center cursor-pointer ${
                    index == controller ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setController(index)}
                >
                  <Image
                    draggable={false}
                    alt=""
                    src={image}
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}
