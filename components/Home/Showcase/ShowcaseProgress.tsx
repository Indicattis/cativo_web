


import LoaderComponent from '@/components/utils/Loader'
import React from 'react'

interface ShowcaseProgressProps {
    progress: number
}

function ShowcaseProgress({ progress}: ShowcaseProgressProps) {
  return (
        <div className="bg-contrast_color_1 w-[100px] h-1 rounded-full">
            <div 
                className="bg-neon_purple h-1 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
  )
}

export default ShowcaseProgress