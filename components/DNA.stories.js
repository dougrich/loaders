import React from 'react'

import DNA from './DNA'

export default {
  title: 'Loader/DNA',
  component: DNA
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <DNA {...args} />
  </div>
)
