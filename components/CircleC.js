import React from 'react'
import './CircleC.css'

export default function CircleC () {
  return (
    <svg viewBox="-50 -50 100 100" width="100%" height="100%">
      <defs>
        <mask id="circlec__masking">
          <circle cx="0" cy="0" r="15" stroke="white" strokeWidth="5"/>
          <rect width="50" height="50" fill="black" className="circlec__tick"/>
        </mask>
      </defs>
      <rect x="-50" y="-50" width="100" height="100" fill="black" mask="url(#circlec__masking)"/>
    </svg>
  )
}