"use client"

import { useState } from 'react';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import DefaultButton from '@/components/layout/button';
import DivComponent from '@/components/layout/div';
import MainComponent from '@/components/layout/main';
import SectionComponent from '@/components/layout/section';
import { rating_array } from '@/data/json/rating';
import { IconDotsVertical, IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';
import Image from 'next/image';

export default function RatingComponent() {
  const [itemActive, setItemActive] = useState<number>(1);
  const [scroll, setScroll] = useState<number>(340)
  const [direction, setDirection] = useState(0); // New state for direction
  const dragControls = useDragControls();

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) { // Changed condition to match expected behavior
      // Drag to the right
      if (itemActive < rating_array.length - 1) {
        setDirection(1);
        setItemActive((prev) => prev + 1);
        setScroll(scroll - 346)
      }
    } else if (info.offset.x > 50) { // Changed condition to match expected behavior
      // Drag to the left
      if (itemActive > 0) {
        setDirection(-1);
        setItemActive((prev) => prev - 1);
        setScroll(scroll + 346)
      }
    }
  };
  const itemChange = (id: any) => {
    if (id < itemActive) {
      setDirection(-1);
      setItemActive((prev) => prev - 1);
      setScroll(scroll + 346)
    } else if (id > itemActive) {
      setDirection(1);
      setItemActive((prev) => prev + 1);
      setScroll(scroll - 346)
    }
  }


  return (
    <SectionComponent className="">
      <MainComponent className=" overflow-hidden">
        <DivComponent className="">
          <motion.div
            animate={
              { translateX: scroll }
            }
            transition={{
              translateX: { type: "spring", stiffness: 350, damping: 80 },
            }}
            className={`flex gap-3 justify-center items-center h-full min-h-[500px]
              `}
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
            {rating_array.map((item, index) => (
              <RatinCard
                key={`rating-card-` + index}
                id={index}
                isActive={itemActive === index}
                direction={direction} // Pass direction to the card
                profile_name={item.profile_name}
                profile_img={item.profile_img}
                loged_from={item.loged_from}
                rating_media={item.rating_media}
                rating_text={item.rating_text}
                setItem={itemChange}
              />
            ))}
            </AnimatePresence>
          </motion.div>
        </DivComponent>
        <DivComponent className="">
          <motion.div className='flex gap-3'>
            {rating_array.map((item, index) => {
              return (
                <motion.div
                key={`bar-`+item.profile_name}
                onClick={() => itemChange(index)}
                className={`h-2 w-12 rounded-full cursor-pointer ${itemActive === index ? "bg-contrast_color_3" : "bg-contrast_color_2"}`}
                >

                </motion.div>
              )
            })}
          </motion.div>
        </DivComponent>
      </MainComponent>
    </SectionComponent>
  );
}



type CardType = {
  id: number
  isActive?: boolean;
  profile_name: string;
  profile_img: string;
  loged_from: string;
  rating_media: number;
  rating_text: string;
  direction: number;
  setItem?: React.Dispatch<React.SetStateAction<number>> | any
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
  setItem
}: CardType) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IconStarFilled key={i} className="text-contrast_color_4" />);
      } else if (i - rating < 1) {
        stars.push(<IconStarHalfFilled key={i} className="text-contrast_color_4" />);
      } else {
        stars.push(<IconStar key={i} className="text-contrast_color_2" />);
      }
    }
    return stars;
  };

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
        className={`${isActive ? 'h-[230px] opacity-100' : 'h-[220px] opacity-60'
          } 
          
          bg-palette_dark flex flex-col justify-between gap-5 p-3 rounded cursor-pointer w-[340px] shadow-lg shadow-purple`}
        onClick={() => setItem(id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-black">
              <Image alt="" src={profile_img} width={100} height={100} />
            </div>
            <div className="flex flex-col gap">
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
        <div className='p-2 bg-contrast_color_2 rounded-lg'>
          <p className="_text _small">&quot;{rating_text}&quot;</p>
        </div>
        <div className="flex">
          {renderStars(rating_media)}
        </div>
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
