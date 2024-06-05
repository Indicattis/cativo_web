import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useState } from "react";
import SliderImagesComponent from "../slider/slider_images";
import { IconX } from "@tabler/icons-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalComponent({ children, onClose }: ModalProps) {
  const [opacity, setOpacity] = useState(1);

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Ajusta a opacidade baseado na distância do arrasto
    const dragOffset = Math.max(0, info.point.y); // Garantir que o valor seja não negativo
    const newOpacity = Math.max(0, 1 - dragOffset / 300); // Ajuste 300 conforme necessário
    setOpacity(newOpacity);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Verifica se a direção do arrasto é para baixo (info.offset.y > 0)
    if (info.offset.y > 100) {  // Ajuste o valor conforme necessário
      onClose();
    } else {
      setOpacity(1); // Reseta a opacidade se o arrasto não for suficiente para fechar
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        drag="y"
        dragConstraints={{
          top: 0,
          left: -30,
          right: 30,
          bottom: 0,
        }}
        key={`box`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          x: { type: "spring", stiffness: 600, damping: 50 },
        }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ opacity: `${opacity}%` }}
        className="_modal_display"
      >
        <div className="_modal w-full">
          <div className="flex flex-col gap-96 w-full justify-around h-screen">
            <div className="w-full flex gap-3 items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
