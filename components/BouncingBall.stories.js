import React from 'react'

import BouncingBall from './BouncingBall'

export default {
  title: 'Loader/Bouncing Ball',
  component: BouncingBall
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <BouncingBall {...args} />
  </div>
)
