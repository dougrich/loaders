import React from 'react'

import ScifiHex from './ScifiHex'

export default {
  title: 'Loader/ScifiHex',
  component: ScifiHex
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <ScifiHex {...args} />
  </div>
)

Example.args = {
  enabled: true,
  transitionDuration: 500
}
