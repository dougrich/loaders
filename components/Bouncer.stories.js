import React from 'react'

import Bouncer from './Bouncer'

export default {
  title: 'Loader/Bouncer',
  component: Bouncer
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Bouncer {...args} />
  </div>
)
