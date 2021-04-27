import React from 'react'
import './BookSpin.css'

export default function BookSpin () {
  return (
    <svg className='bookspin' viewBox='-50 -50 100 100'>
      <line className='bookspin__page bookspin__page--0' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--1' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--2' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--3' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--4' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--5' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--6' x1='-25' x2='-5' y1='0' y2='0' />
      <line className='bookspin__page bookspin__page--7' x1='-25' x2='-5' y1='0' y2='0' />
      <path className='bookspin__spine' d='M-25 5L-5 5A6 6 0 0 0 5 5L25 5' />
    </svg>
  )
}
