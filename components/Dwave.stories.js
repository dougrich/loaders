import React from 'react'

import Dwave from './Dwave'

export default {
  title: 'Loader/Dwave',
  component: Dwave
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Dwave {...args} />
  </div>
)
