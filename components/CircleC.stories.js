import React from 'react'

import CircleC from './CircleC'

export default {
  title: 'Loader/Circle C',
  component: CircleC
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <CircleC {...args} />
  </div>
)
