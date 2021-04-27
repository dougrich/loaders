import React from 'react'
import './Dpulse.css'

export default function Dpulse () {
  return (
    <svg className='dpulse' viewBox='-50 -50 100 100'>
      <rect className='dpulse__box' x='-25' y='-25' width='50' height='50' />
      <rect className='dpulse__center' x='-10' y='-10' width='20' height='20' />
    </svg>
  )
}
