import React from 'react'
import './BoxLoader.css'

export default function BoxLoader () {
  return (
    <svg viewBox='-50 -50 100 100' width='100%' height='100%'>
      <g className='box__g box__g0'><rect className='box__square' x='0' y='0' width='15' height='15' rx='3' /></g>
      <g className='box__g box__g1'><rect className='box__square' x='0' y='0' width='15' height='15' rx='3' /></g>
      <g className='box__g box__g2'><rect className='box__square' x='0' y='0' width='15' height='15' rx='3' /></g>
      <g className='box__g box__g3'><rect className='box__square' x='0' y='0' width='15' height='15' rx='3' /></g>
    </svg>
  )
}
