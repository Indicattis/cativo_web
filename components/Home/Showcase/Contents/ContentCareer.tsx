import React from 'react'
import { ContentProps } from './types'



function ContentCareer({isActive}: ContentProps) {
  return (
    isActive && (
      <div>ContentCareer</div>
    )
  )
}

export default ContentCareer