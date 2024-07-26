import { AnimatePresence, PanInfo, motion, useDragControls } from "framer-motion";
import { ReactNode, useState } from "react"



interface ShowcaseContentProps {
    selectedItem: number;
    setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
    numOfSliders: number;
    data: ReactNode[]
}

export default function ShowcaseContent({data, selectedItem, setSelectedItem, numOfSliders}: ShowcaseContentProps) { 
    
    const [direction, setDirection] = useState(0)
    const dragControls = useDragControls();
    
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragThreshold = 10; // Ajuste o limiar de arrasto conforme necessário
    if (info.offset.x > dragThreshold && selectedItem > 1) {
        setSelectedItem(selectedItem - 1);
        setDirection(-1);
    } else if (info.offset.x < -dragThreshold && selectedItem < numOfSliders) {
        setSelectedItem(selectedItem + 1);
        setDirection(1);
    } else if (info.offset.x > dragThreshold && selectedItem === 1) {
        setSelectedItem(numOfSliders); // Se estivermos na primeira página e arrastarmos para a direita, vá para a última página.
        setDirection(-1);
    } else if (info.offset.x < -dragThreshold && selectedItem === numOfSliders) {
        setSelectedItem(1); // Se estivermos na última página e arrastarmos para a esquerda, vá para a primeira página.
        setDirection(1);
    }
};


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

const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 2000 : -2000,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 440, damping: 80 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        zIndex: 1,
        x: direction < 0 ? 2000 : -2000,
        scale: 0.8,
        transition: {
          x: { type: "spring", stiffness: 440, damping: 80 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };
  


return (
    <>
        {data.map((item, index) => {
            return (
                <AnimatePresence key={index + 1}>
                {selectedItem === index + 1 && (
                    <motion.div
                        key={index + 1}
                        transition={{
                          translateX: { type: "spring", stiffness: 350, damping: 80 },
                        }}
                        drag="x"
                        dragControls={dragControls}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center`}
                    >
                        {/* <Image className="w-full h-full object-cover" priority draggable={false} alt="" src={item.url} width={3000} height={3000}/> */}
                        
                        <AnimatePresence custom={direction}>
        <motion.div
          key={`slide-box`}
          variants={slideVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
        >
            {item}
        </motion.div>
      </AnimatePresence>
                    </motion.div>
                )}
        </AnimatePresence>
            )
        })}
    </>
)
}