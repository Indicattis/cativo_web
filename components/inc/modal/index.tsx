import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useState } from "react";
import SliderImagesComponent from "../slider/slider_images";
import { IconX } from "@tabler/icons-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode,
}

export default function ModalComponent({
  children,
  onClose,
}: ModalProps) {


  return (
    <AnimatePresence>
      <motion.div
        key={`box`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
            x: { type: "spring", stiffness: 600, damping: 50 },
        }}
        className="_modal_display"
      >
        <div className="_modal w-full">
          <span className="absolute top-0 right-0 p-5 z-50 cursor-pointer" onClick={() => onClose()}><IconX/></span>
          <div className=" flex flex-col gap-96 w-full justify-around h-screen ">
            <div className="w-full flex gap-3 items-stretch">
              
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
