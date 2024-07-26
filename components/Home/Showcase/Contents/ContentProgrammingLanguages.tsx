



import React from 'react'
import { ContentProps } from './types'

function ContentProgrammingLanguages({isActive}: ContentProps) {
  return (
    isActive && (
      <div>ContentProgrammingLanguages</div>
    )
  )
}

export default ContentProgrammingLanguages