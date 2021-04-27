import React from 'react'

import Spring from './Spring'

export default {
  title: 'Loader/Spring',
  component: Spring
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <Spring {...args} />
  </div>
)
