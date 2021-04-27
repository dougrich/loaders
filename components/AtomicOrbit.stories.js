import React from 'react'

import AtomicOrbit from './AtomicOrbit'

export default {
  title: 'Loader/Atomic Orbit',
  component: AtomicOrbit
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <AtomicOrbit {...args} />
  </div>
)
