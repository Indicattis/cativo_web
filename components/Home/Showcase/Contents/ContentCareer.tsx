import React from 'react'
import { IconBook2, IconCertificate, IconInfinity, IconSchool } from '@tabler/icons-react'
import { getColorRGB } from '@/functions/color'
import { motion } from 'framer-motion'


function ContentCareer() {
  return (
      <div className='relative h-96  flex flex-col justify-center bg-black p-10 rounded-[50px] items-start max-md:w-[367px] max-md:p-0'>
        <div className=' flex justify-start items-center gap-[44.7px] px-1 max-md:scale-50 max-md:-ml-28'>

        <div className='absolute flex items-center gap-[44.7px] px-1'>
          
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple  rounded-full p-[8px]'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              transition={{delay: 0.3}}
              >
                <IconBook2 className='' width={55} height={55} stroke={1.7}></IconBook2>
              </motion.div>
            </motion.div>
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple w-[100px] p-1 absolute'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              >
              </motion.div>
            </motion.div>
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple  rounded-full p-[8px]'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              transition={{delay: 1.5}}
              >
                <IconCertificate className='' width={55} height={55} stroke={1.7}></IconCertificate>
              </motion.div>
            </motion.div>
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple w-[100px] p-1 absolute'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              >
              </motion.div>
            </motion.div>
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple  rounded-full p-[8px]'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              transition={{delay: 2.6}}
              >
                <IconSchool className='' width={55} height={55} stroke={1.7}></IconSchool>
              </motion.div>
            </motion.div>
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple w-[100px] p-1 absolute'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              >
              </motion.div>
            </motion.div>
            <motion.div  className='w-full h-full  z-30 relative flex items-center justify-center'>
              <motion.div
              className='bg-purple  rounded-full p-[8px]'
              initial={{color: "rgb(6 6 6)", opacity: 0.8}}
              animate={{color: "rgb(80 5 242)", opacity: 1}}
              transition={{delay: 3.7}}
              >
                <IconInfinity className='' width={55} height={55} stroke={1.7}></IconInfinity>
              </motion.div>
            </motion.div>
        </div>
        <div className='relative flex items-center '>
          <div className='relative w-[80px] h-[80px] p-1 flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px]  h-[80px] rounded-full absolute top-0'></motion.div>
          </div>
          <div className='relative w-[80px] p-2  flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px] p-2  absolute top-0'></motion.div>
          </div>
          <div className='relative w-[80px] h-[80px] p-1 flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px] h-[80px] rounded-full absolute top-0'></motion.div>
          </div>
          <div className='relative w-[80px] p-2  flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px] p-2  absolute top-0'></motion.div>
          </div>
          <div className='relative w-[80px] h-[80px] p-1 flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px] h-[80px] rounded-full absolute top-0'></motion.div>
          </div>
          <div className='relative w-[80px] p-2  flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px] p-2  absolute top-0'></motion.div>
          </div>
          <div className='relative w-[80px] h-[80px] p-1 flex items-center justify-center z-10'>
            <motion.div  style={{background: getColorRGB("default")}} className='w-[80px] h-[80px] rounded-full absolute top-0'></motion.div>
          </div>
        </div>
        <motion.div 
        initial={{width: "100%"}}
        animate={{width: "0%"}}
        
        transition={{duration: 10}}
        className='absolute right-0 h-full w-full rounded-[50px] bg-black z-20'>
        </motion.div>
        </div>
      </div>
  )
}

export default ContentCareer