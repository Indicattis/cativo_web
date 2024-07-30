




import { IconPhone, IconSearch, IconVideo } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

interface ChatHeaderProps {

}

function ChatHeader() {
  return (
    <div className='absolute left-0 rounded-t-lg top-0 w-full h-14 bg-purple flex justify-between items-center px-3 shadow shadow-palette_black'>
        <div className='flex items-center gap-3'>

        <div className='max-w-10 h-10 rounded-full overflow-hidden'>
            <Image alt=''  src={`/img/profile/foto_2.png`} width={56} height={56}/>
        </div>
        <div className='flex flex-col gap-1'>
            <h1>Programador</h1>
        </div>
        </div>
        <div className='flex'>
            <div className='p-2 border-l border-t border-b rounded-l border-contrast_color_2 text-contrast_color_3'><IconPhone stroke={1}/></div>
            <div className='p-2 border  border-contrast_color_2 text-contrast_color_3'><IconVideo stroke={1}/></div>
            <div className='p-2  text-contrast_color_2'><IconSearch stroke={1}/></div>
        </div>
    </div>
  )
}

export default ChatHeader