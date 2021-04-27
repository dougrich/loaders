import React from 'react'
import './AtomicOrbit.css'

export default function AtomicOrbit () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <circle className='atomic__track' cx='0' cy='0' r='20' stroke='black' strokeWidth='1' fill='transparent' />
      <circle className='atomic__track' cx='0' cy='0' r='30' stroke='black' strokeWidth='1' fill='transparent' />
      <circle className='atomic__track' cx='0' cy='0' r='40' stroke='black' strokeWidth='1' fill='transparent' />
      <circle className='atomic__orbit atomic__orbit__0' cx='20' cy='0' r='4' stroke='black' fill='white' strokeWidth='1' />
      <circle className='atomic__orbit atomic__orbit__1' cx='30' cy='0' r='3' stroke='black' fill='white' strokeWidth='1' />
      <circle className='atomic__orbit atomic__orbit__2' cx='40' cy='0' r='2' stroke='black' fill='white' strokeWidth='1' />
    </svg>
  )
}
