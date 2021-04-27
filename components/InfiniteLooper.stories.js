import React from 'react'

import InfiniteLooper from './InfiniteLooper'

export default {
  title: 'Loader/Infinite Looper',
  component: InfiniteLooper
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <InfiniteLooper {...args} />
  </div>
)
