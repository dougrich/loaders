import React from 'react'
import './Hourglass.css'

export default function Hourglass () {
  return (
    <svg viewBox='-50 -50 100 100'>
      <defs>
        <mask id='hourglass'>
          <path d='M-30 -30L30 -30L25 -30C25 0 5 -10 5 0C5 10 25 0 25 30L30 30L-30 30L-25 30C-25 0 -5 10 -5 0C-5 -10 -25 0 -25 -30Z' fill='white' />
        </mask>
      </defs>
      <g className='hourglass'>
        <path d='M-30 -30L30 -30L25 -30C25 0 5 -10 5 0C5 10 25 0 25 30L30 30L-30 30L-25 30C-25 0 -5 10 -5 0C-5 -10 -25 0 -25 -30Z' fill='transparent' stroke='black' stroke-width='3' stroke-linejoin='round' stroke-linecap='round' />
        <g mask='url(#hourglass)'>
          <rect className='hourglass__sand' x='-30' y='-30' width='60' height='30' />
          <g style='transform: rotate(180deg);'>
            <rect className='hourglass__sand hourglass__bottom' x='-30' y='-30' width='60' height='30' />
          </g>
        </g>
      </g>
    </svg>
  )
}
