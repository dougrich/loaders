import React from 'react'

import BoxLoader from './BoxLoader'

export default {
  title: 'Loader/Box Loader',
  component: BoxLoader
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <BoxLoader {...args} />
  </div>
)
