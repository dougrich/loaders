import React from 'react'

import Dpulse from './Dpulse'

export default {
  title: 'Loader/DPulse',
  component: Dpulse
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Dpulse {...args} />
  </div>
)
