import React, { useEffect, useState } from 'react'
import './ScifiHex.css'

function computeStyle (animationDuration) {
  return function tileStyle (x, y) {
    const angle = 0.5 * (Math.atan2(y, x) - Math.PI) / Math.PI
    return {
      '--animation-duration': `${animationDuration}ms`,
      animationDelay: `${angle * animationDuration}ms`
    }
  }
}

export default function ScifiHex ({ enabled, transitionDuration, animationDuration }) {
  const [{ isVisible, isFadingIn, isFadingOut }, setVisibility] = useState({
    isVisible: enabled,
    isFadingIn: false,
    isFadingOut: false
  })
  transitionDuration = transitionDuration ?? 500
  animationDuration = animationDuration ?? 1000

  useEffect(() => {
    let isRelevant = true
    if (isVisible && !enabled) {
      setVisibility({
        isVisible: true,
        isFadingIn: false,
        isFadingOut: true
      })
      setTimeout(() => {
        if (isRelevant) {
          setVisibility({
            isVisible: false,
            isFadingIn: false,
            isFadingOut: false
          })
        }
      }, transitionDuration)
    } else if (!isVisible && enabled) {
      setVisibility({
        isVisible: true,
        isFadingIn: true,
        isFadingOut: false
      })
      setTimeout(() => {
        if (isRelevant) {
          setVisibility({
            isVisible: true,
            isFadingIn: false,
            isFadingOut: false
          })
        }
      })
    }
    return () => { isRelevant = false }
  }, [enabled])

  if (!isVisible) {
    return null
  }

  let className = 'scifihex'

  if (isFadingIn) {
    className += ' scifihex--fade-in'
  } else if (isFadingOut) {
    className += ' scifihex--fade-out'
  }

  const style = {
    '--transition-duration': `${transitionDuration}ms`,
    '--animation-duration': `${animationDuration}ms`
  }

  const tileStyle = computeStyle(animationDuration)

  return (
    <svg className={className} style={style} viewBox='-50 -50 100 100'>
      {/* row 0 */}
      <path className='scifihex__tile' style={tileStyle(-10, -7.666)} d='M-15 -5L-5 -5L-10 -13Z' />
      <path className='scifihex__tile' style={tileStyle(-5, -10.333)} d='M-10 -13L0-13L-5 -5Z' />
      <path className='scifihex__tile' style={tileStyle(0, -7.666)} d='M-5 -5L5 -5L0 -13Z' />
      <path className='scifihex__tile' style={tileStyle(5, -10.333)} d='M10 -13L0-13L5 -5Z' />
      <path className='scifihex__tile' style={tileStyle(10, -7.666)} d='M15 -5L5 -5L10 -13Z' />
      {/* row 1 */}
      <path className='scifihex__tile' style={tileStyle(-15, 0.333)} d='M-10 3L-15 -5 L-20 3Z' />
      <path className='scifihex__tile' style={tileStyle(-10, -2.333)} d='M-15 -5L-5 -5L-10 3Z' />
      <path className='scifihex__tile' style={tileStyle(-5, 0.333)} d='M0 3L-5 -5 L-10 3Z' />
      <path className='scifihex__tile' style={tileStyle(0, -2.333)} d='M-5 -5L5 -5L0 3Z' />
      <path className='scifihex__tile' style={tileStyle(5, 0.333)} d='M10 3L5 -5 L0 3Z' />
      <path className='scifihex__tile' style={tileStyle(10, -2.333)} d='M15 -5L5 -5L10 3Z' />
      <path className='scifihex__tile' style={tileStyle(15, 0.333)} d='M20 3L15 -5 L10 3Z' />
      {/* row 2 */}
      <path className='scifihex__tile' style={tileStyle(-15, 5.666)} d='M-10 3L-15 11 L-20 3Z' />
      <path className='scifihex__tile' style={tileStyle(-10, 8.333)} d='M-15 11L-5 11L-10 3Z' />
      <path className='scifihex__tile' style={tileStyle(-5, 5.666)} d='M0 3L-5 11 L-10 3Z' />
      <path className='scifihex__tile' style={tileStyle(0, 8.333)} d='M-5 11L5 11L0 3Z' />
      <path className='scifihex__tile' style={tileStyle(5, 5.666)} d='M10 3L5 11 L0 3Z' />
      <path className='scifihex__tile' style={tileStyle(10, 8.333)} d='M15 11L5 11L10 3Z' />
      <path className='scifihex__tile' style={tileStyle(15, 5.666)} d='M20 3L15 11 L10 3Z' />
      {/* row 3 */}
      <path className='scifihex__tile' style={tileStyle(-10, 13.666)} d='M-15 11L-5 11L-10 19Z' />
      <path className='scifihex__tile' style={tileStyle(-5, 16.333)} d='M-10 19L0 19L-5 11Z' />
      <path className='scifihex__tile' style={tileStyle(0, 13.666)} d='M-5 11L5 11L0 19Z' />
      <path className='scifihex__tile' style={tileStyle(5, 16.333)} d='M10 19L0 19L5 11Z' />
      <path className='scifihex__tile' style={tileStyle(10, 13.666)} d='M15 11L5 11L10 19Z' />
    </svg>
  )
}
