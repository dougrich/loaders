import React from 'react'

import Rosary from './Rosary'

export default {
  title: 'Loader/Rosary',
  component: Rosary
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Rosary {...args} />
  </div>
)
