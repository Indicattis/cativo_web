


import React from 'react'
import { ContentProps } from './types'

function ContentMotivation({isActive}: ContentProps) {
  return (
    isActive && (
      <div>ContentMotivation</div>
    )
  )
}

export default ContentMotivation