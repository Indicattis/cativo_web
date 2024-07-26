




import React from 'react'
import { ContentProps } from './types'

function ContentSkills({isActive}: ContentProps) {
  return (
    isActive && (
      <div>ContentSkills</div>
    )
  )
}

export default ContentSkills