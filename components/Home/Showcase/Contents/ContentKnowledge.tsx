


import React from 'react'
import { ContentProps } from './types'


function ContentKnowledge({isActive}: ContentProps) {
  return (
    isActive && (
      <div>ContentKnowledge</div>
    )
  )
}

export default ContentKnowledge