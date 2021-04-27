import React from 'react'

import PulseLoader from './Pulse'

export default {
  title: 'Loader/Pulse',
  component: PulseLoader
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <PulseLoader {...args} />
  </div>
)
