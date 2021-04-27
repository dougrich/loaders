import React from 'react'

import DotBounce from './DotBounce'

export default {
  title: 'Loader/Dot Bounce',
  component: DotBounce
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <DotBounce {...args} />
  </div>
)
