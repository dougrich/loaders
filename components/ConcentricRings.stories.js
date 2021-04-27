import React from 'react'

import ConcentricRings from './ConcentricRings'

export default {
  title: 'Loader/Concentric Rings',
  component: ConcentricRings
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <ConcentricRings {...args} />
  </div>
)
