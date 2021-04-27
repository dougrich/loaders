import React from 'react'

import Hourglass from './Hourglass'

export default {
  title: 'Loader/Hourglass',
  component: Hourglass
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Hourglass {...args} />
  </div>
)
