import React from 'react'

import DnaLoader from './DNA'

export default {
  title: 'Loader/DNA',
  component: DnaLoader
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <DnaLoader {...args} />
  </div>
)
