import React from 'react'

import Flywheel from './Flywheel'

export default {
  title: 'Loader/Flywheel',
  component: Flywheel
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Flywheel {...args} />
  </div>
)
