import React from 'react'

import DotSpin from './DotSpin'

export default {
  title: 'Loader/Dot Spin',
  component: DotSpin
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <DotSpin {...args} />
  </div>
)
