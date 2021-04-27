import React from 'react'

import CubeSpin from './Cubespin'

export default {
  title: 'Loader/CubeSpin',
  component: CubeSpin
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <CubeSpin {...args} />
  </div>
)
