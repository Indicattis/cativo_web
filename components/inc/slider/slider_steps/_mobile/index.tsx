import { IconCaretLeft, IconCaretRight, IconPlayerPause } from "@tabler/icons-react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  numOfSliders: number;
  data: any[];
  showControllers: boolean;
}

export default function SliderStepsComponentMobile({
  selectedItem,
  setSelectedItem,
  numOfSliders,
  data,
  showControllers
}: SliderProps) {

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


  return (
    <div className="h-full w-full relative flex flex-col bg-gray">
      {data.map((item, index) => (
        <AnimatePresence key={item.id}>
            {selectedItem == item.id && (

          <motion.div
            variants={variants}
            className={` w-full h-[250px] flex items-center justify-center cursor-pointer transition-all ${
              selectedItem == item.id ? "opacity-100" : " opacity-65"
            }`}
            onClick={() => {setSelectedItem(item.id)}}
          >
                <Image
                className="w-full h-full object-cover"
                draggable={false}
                alt=""
                src={item.logo}
                width={2000}
                height={2000}
                />
                <div></div>
            <div className={`absolute top-2 text-2xl w-full flex items-center justify-center text-center z-50 pt-1 text-white`}>
                {item.exhibition}
            </div>
            <div className="absolute top-0 opacity-50 h-16 bg-gradient-to-b from-black to-transparent w-full"></div>
            {selectedItem == item.id && (
              <div className="absolute bottom-10 w-4/5 h-1 bg-gray rounded-full z-50 overflow-hidden max-md:hidden">
                <div
                  className={`h-full bg-white z-50 w-full transition-all`}
                ></div>
              </div>
            )}
          </motion.div>
            )}
        </AnimatePresence>
      ))}
      <div className="relative grid grid-cols-3 gap-2 p-3 ">
      {showControllers && (
        data.map((item) => {
            return (
                <div 
                onClick={() => setSelectedItem(item.id)}
                className={`relative flex text-xs font-poppins capitalize tracking-wide font-bold p-2  h-10 w-18 bg-dark justify-between items-center border-b border-black`}>
                    {item.exhibition}
                    {selectedItem == item.id && (
                        <div className="absolute bottom-1 w-[90%] h-1 bg-gray rounded-full z-50 overflow-hidden">
                            <div
                            className={`h-full bg-white z-50 w-full transition-all`}
                            ></div>
                        </div>
                        )}
                        {selectedItem == item.id && (
                        <div className="h-2 w-2 bg-gray rounded-full z-50 overflow-hidden">
                            <div
                            className={`h-full w-full bg-${item.theme} z-50 transition-all`}
                            ></div>
                        </div>
                        )}
                </div>
            )
        })
      )}
      
      </div>
    </div>
  );
}
