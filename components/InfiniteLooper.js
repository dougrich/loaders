import React from 'react'
import './InfiniteLooper.css'

export default function BouncingBall () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <path className='infinite-loop' d='M-20 20A20 20 0 0 1 -20 -20C0 -20 0 20 20 20A20 20 0 0 0 20 -20C0 -20 0 20 -20 20' stroke='black' strokeWidth='5' fill='transparent' />
    </svg>
  )
}
