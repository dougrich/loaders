import React from 'react'

import FlashSpinner from './FlashSpinner'

export default {
  title: 'Loader/Flash Spinner',
  component: FlashSpinner
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <FlashSpinner {...args} />
  </div>
)
