import React from 'react'
import './FlashSpinner.css'

export default function FlashSpinner () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <rect className='flash-spinner flash-spinner__0' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__1' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__2' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__3' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__4' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__5' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__6' x='10' y='-3' width='10' height='6' rx='3' />
      <rect className='flash-spinner flash-spinner__7' x='10' y='-3' width='10' height='6' rx='3' />
    </svg>
  )
}
