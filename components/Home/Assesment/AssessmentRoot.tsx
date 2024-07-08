import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface AssessmentRootProps {
    id: number
    isActive?: boolean;
    direction: number;
    setItem?: React.Dispatch<React.SetStateAction<number>> | any
    children: ReactNode
  };
  
 export default function AssessmentRoot({
    id,
    isActive,
    direction,
    setItem,
    children
  }: AssessmentRootProps) {
    return (
      <AnimatePresence custom={direction}>
        <motion.div
          key={`rating-box-${id}`}
          variants={cardVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          whileTap={{ scale: 0.95 }}
          className={`${isActive ? 'h-[240px] bg-gradient-to-tr from-neon_purple to-neon_pink2' : 'h-[220px] bg-purple'
            } 
            
             flex flex-col justify-between gap-5 p-3 rounded-[5px] cursor-pointer w-[400px]`}
          onClick={() => setItem(id)}
        >
            {children}
        </motion.div>
      </AnimatePresence>
    );
  }
  
  
  const cardVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 340 : -340,
        scale: 1,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 440, damping: 80 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        zIndex: 1,
        x: direction < 0 ? 340 : -340,
        scale: 0.8,
        transition: {
          x: { type: "spring", stiffness: 440, damping: 80 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };
  