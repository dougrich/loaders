import React from 'react'
import './Cubespin.css'

export default function Cubespin () {
  return (
    <div className='cubespin'>
      <div className='cubespin__world'>
        <div className='cubespin__face cubespin__face--0' />
        <div className='cubespin__face cubespin__face--1' />
        <div className='cubespin__face cubespin__face--2' />
        <div className='cubespin__face cubespin__face--3' />
        <div className='cubespin__face cubespin__face--4' />
        <div className='cubespin__face cubespin__face--5' />
      </div>
    </div>
  )
}
