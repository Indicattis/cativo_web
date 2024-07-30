import React from 'react'
import { motion } from 'framer-motion'


interface ProgrammingLevelProps {
    legend: string,
    icon: React.ReactNode
    level: number
    time?: string
}

export default function ProgrammingLevel({icon, legend, level, time}: ProgrammingLevelProps) {

    const renderLevels = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 10; i++) {
          if (i <= rating) {
            stars.push(<motion.div initial={{width:0}} animate={{width:40}} transition={{delay: i*0.2}} key={i} className="rounded-full h-1 bg-neon_purple"></motion.div>);
          } else if (i - rating < 1) {
            stars.push(<motion.div initial={{width:0}} animate={{width:40}} transition={{delay: i*0.2}} key={i} className="rounded-full h-1 bg-purple"></motion.div>);
          } else {
            stars.push(<motion.div initial={{width:0}} animate={{width:40}} transition={{delay: i*0.2}} key={i} className="rounded-full h-1 bg-contrast_color_2"></motion.div>);
          }
        }
        return stars;
      };
    
  return (
    <div className='flex flex-col gap-5  '>
        <div className='flex justify-between items-center gap-3 font-mono '>
            <div className='flex items-center gap-3 '>
                <div className='bg-gradient-to-tr from-purple to-contrast_color_1 p-3 rounded-full'>
                {icon}
                </div>
                <h1 className=''>{legend}<p className='text-palette_gray _text _small '>{time}</p></h1>
            </div>
        </div>
        <div className='flex gap-[2px] w-full'>
            {renderLevels(level)}
        </div>
    </div>
  )
}
