import React from 'react'
import './Pulse.css'

export default function Pulse () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <rect className='pulse pulse__0' x='-35' y='-10' width='10' height='20' />
      <rect className='pulse pulse__1' x='-20' y='-10' width='10' height='20' />
      <rect className='pulse pulse__2' x='-5' y='-10' width='10' height='20' />
      <rect className='pulse pulse__3' x='10' y='-10' width='10' height='20' />
      <rect className='pulse pulse__4' x='25' y='-10' width='10' height='20' />
    </svg>
  )
}
