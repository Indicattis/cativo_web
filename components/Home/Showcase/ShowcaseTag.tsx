



import React from 'react'

interface ShowcaseTagProps {
    string: string
}

function ShowcaseTag({string}: ShowcaseTagProps) {
  return (
    <div className='text-palette_gray _text _small px-3 py-2 rounded bg-purple'>#{string}</div>
  )
}

export default ShowcaseTag