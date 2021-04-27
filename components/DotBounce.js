import React from 'react'
import './DotBounce.css'

export default function DotBounce () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <circle className='dotbounce dotbounce__0' cx='-18' cy='25' r='5' />
      <circle className='dotbounce dotbounce__1' cx='-6' cy='25' r='5' />
      <circle className='dotbounce dotbounce__2' cx='6' cy='25' r='5' />
      <circle className='dotbounce dotbounce__3' cx='18' cy='25' r='5' />
    </svg>
  )
}
