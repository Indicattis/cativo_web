


import React from 'react'
import { ContentProps } from './types'
import Image from 'next/image'


function ContentKnowledge() {
  return (
      <div>
        <div className='flex gap-3 max-md:flex-col'>
          <div className=' h-60 rounded-3xl shadow-lg shadow-contrast_color_2 overflow-hidden flex justify-center items-center'>
            <Image priority draggable={false} alt='' src={`/img/showcase/conhecimentos/interfaces.png`} width={500} height={500}/>
          </div>
          <div className=' h-60 rounded-3xl shadow-lg shadow-contrast_color_2 overflow-hidden flex justify-center items-center'>
            <Image priority draggable={false} alt='' src={`/img/showcase/conhecimentos/mobile.jpg`} width={500} height={500}/>
          </div>
        </div>
      </div>
  )
}

export default ContentKnowledge