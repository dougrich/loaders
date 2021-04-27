import React from 'react'
import './ConcentricRings.css'

export default function ConcentricRings () {
  return (
    <svg className='conrings' viewBox='-50 -50 100 100'>
      <path className='conrings__ring conrings__ring__0' d='M0 -18A18 18 0 1 0 0 18' stroke='black' strokeWidth='5' fill='transparent' />
      <path className='conrings__ring conrings__ring__1' d='M0 -24A24 24 0 1 0 0 24' stroke='black' strokeWidth='5' fill='transparent' />
      <path className='conrings__ring conrings__ring__2' d='M0 -30A30 30 0 1 0 0 30' stroke='black' strokeWidth='5' fill='transparent' />
    </svg>
  )
}
