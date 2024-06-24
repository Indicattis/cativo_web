"use client"

import { useState } from 'react';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import DefaultButton from '@/components/layout/button';
import DivComponent from '@/components/layout/div';
import MainComponent from '@/components/layout/main';
import SectionComponent from '@/components/layout/section';
import { rating_array } from '@/data/json/rating';
import { IconDotsVertical } from '@tabler/icons-react';
import Image from 'next/image';

export default function RatingComponent() {
  const [itemActive, setItemActive] = useState(1);
  const [direction, setDirection] = useState(0); // New state for direction
  const dragControls = useDragControls();

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) { // Changed condition to match expected behavior
      // Drag to the right
      if (itemActive < rating_array.length - 1) {
        setDirection(1);
        setItemActive((prev) => prev + 1);
      }
    } else if (info.offset.x > 50) { // Changed condition to match expected behavior
      // Drag to the left
      if (itemActive > 0) {
        setDirection(-1);
        setItemActive((prev) => prev - 1);
      }
    }
  };
  const itemChange = (side: "left" | "right") => {
    if (side == "left") {
      setDirection(-1);
      setItemActive((prev) => prev - 1);
    } else {
      setDirection(1);
      setItemActive((prev) => prev + 1);
    }
  }

  const startIndex = Math.max(0, itemActive - 1);

  return (
    <SectionComponent className="">
      <MainComponent className=" overflow-hidden">
        <DivComponent className="">
          <motion.div
            className={`flex gap-3 justify-center items-center h-full min-h-[500px]
              ${itemActive == 0 ? "pl-[700px]" : ""}
              ${itemActive == rating_array.length - 1 ? "pr-[300px]" : ""}
              `}
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {rating_array.slice(startIndex, startIndex + 3).map((item, index) => (
              <RatinCard
                key={startIndex + `-` + index}
                id={startIndex + index}
                isActive={itemActive === startIndex + index}
                direction={direction} // Pass direction to the card
                profile_name={item.profile_name}
                profile_img={item.profile_img}
                loged_from={item.loged_from}
                rating_media={item.rating_media}
                rating_text={item.rating_text}
              />
            ))}
          </motion.div>
        </DivComponent>
        <DivComponent className="">
          <DefaultButton variant="submit" rounded="full" wide="lg">
            +
          </DefaultButton>
        </DivComponent>
      </MainComponent>
    </SectionComponent>
  );
}


type CardType = {
  id?: number
  isActive?: boolean;
  profile_name: string;
  profile_img: string;
  loged_from: string;
  rating_media: number;
  rating_text: string;
  direction: number
};

function RatinCard({
  id,
  isActive,
  direction,
  profile_name,
  loged_from,
  profile_img,
  rating_media,
  rating_text,
}: CardType) {
  return (
    <AnimatePresence custom={direction}>
      <motion.div
        key={`rating-box-` + id}
        variants={cardVariants}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        whileTap={{ scale: 0.95 }}
        className={`${
          isActive ? 'h-[230px] opacity-100' : 'h-[220px] opacity-60'
        } 
          
          bg-palette_dark flex flex-col justify-between gap-5 p-5 rounded cursor-pointer w-[340px] shadow-lg shadow-purple`}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-black">
              <Image alt="" src={profile_img} width={100} height={100} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="_text">{profile_name}</h1>
              <p className="_text _small text-palette_gray">
                Logged from <span className="font-bold text-neon_purple">{loged_from}</span>
              </p>
            </div>
          </div>
          <div>
            <IconDotsVertical />
          </div>
        </div>
        <div>
          <p className="_text _small">&quot;{rating_text}&quot;</p>
        </div>
        <div className="">{rating_media}</div>
      </motion.div>
    </AnimatePresence>
  );
}

const cardVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 340 : -340,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 340, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 1,
      x: direction < 0 ? 340 : -340,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 340, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};
