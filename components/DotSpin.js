import React from 'react'
import './DotSpin.css'

export default function DotSpin () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <circle cx='0' cy='0' r='35' fill='transparent' stroke='black' strokeWidth='5' />
      <circle className='dotspin dotspin--0' cx='0' cy='0' r='6' fill='black' stroke='white' strokeWidth='6' />
      <circle className='dotspin dotspin--1' cx='0' cy='0' r='6' fill='black' stroke='white' strokeWidth='6' />
      <circle className='dotspin dotspin--2' cx='0' cy='0' r='6' fill='black' stroke='white' strokeWidth='6' />
    </svg>
  )
}
