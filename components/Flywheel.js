import React from 'react'
import './Flywheel.css'

export default function Flywheel () {
  return (
    <svg className='flywheel' viewBox='-50 -50 100 100'>
      <defs>
        <mask id='flywheel__loop'>
          <rect x='-50' y='-50' width='100' height='100' fill='white' />
          <circle cx='-20' cy='0' r='20' fill='black' />
        </mask>
        <mask id='flywheel__ring'>
          <circle cx='0' cy='0' r='30' fill='white' />
        </mask>
      </defs>
      <g className='flywheel' mask='url(#flywheel__ring)'>
        <circle cx='-20' cy='0' r='20' fill='#777' />
        <circle cx='-14.14' cy='-14.14' r='20' fill='#bbb' />
        <circle cx='0' cy='-20' r='20' fill='#888' />
        <circle cx='14.14' cy='-14.14' r='20' fill='#ccc' />
        <circle cx='20' cy='0' r='20' fill='#999' />
        <circle cx='14.14' cy='14.14' r='20' fill='#666' mask='url(#flywheel__loop)' />
        <circle cx='0' cy='20' r='20' fill='#aaa' mask='url(#flywheel__loop)' />
        <circle cx='-14.14' cy='14.14' r='20' fill='#ddd' mask='url(#flywheel__loop)' />
      </g>
    </svg>
  )
}
