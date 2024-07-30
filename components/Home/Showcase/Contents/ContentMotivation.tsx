


import React from 'react'
import { ContentProps } from './types'
import Image from 'next/image'

function ContentMotivation() {
  return (
    <div>
      <div className='flex gap-3 max-md:flex-col'>
        <div className=' rounded-3xl shadow-lg shadow-contrast_color_2 overflow-hidden flex justify-center items-center'>
          <Image alt='' src={`/img/showcase/conhecimentos/motivation.png`} width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default ContentMotivation