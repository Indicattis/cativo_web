



import React from 'react'


interface ShowcaseLegendProps {
    legend?: string
}

function ShowcaseLegend({legend}: ShowcaseLegendProps) {
  return (
    <h1 className="_display_text _biggest flex gap-3 items-center">{legend}</h1>
  )
}

export default ShowcaseLegend