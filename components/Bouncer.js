import React from 'react'
import './Bouncer.css'

export default function Bouncer () {
  return (
    <svg className='bouncer' viewBox='-50 -50 100 100' width='100%' height='100%'>
      <line className='bouncer__shadow' x1='-35' x2='35' y1='45' y2='45' strokeLinecap='round' />
      <path d='M0,20L18,-10L-18,-10ZM0,20L-24,15L-18,-10M0,20L24,15L18,-10L0,-24L-18,-10L-24,-12L0,-24L24,-12L18,-10M24,-12L24,15L0,28L0,20M0,28L-24,15L-24,-12' strokeLinecap='round' strokeLinejoin='round' className='bouncer__ball' />
    </svg>
  )
}
