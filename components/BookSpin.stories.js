import React from 'react'

import BookSpin from './BookSpin'

export default {
  title: 'Loader/Book Spin',
  component: BookSpin
}

export const Example = (args) => (
  <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '2em' }}>
    <BookSpin {...args} />
  </div>
)
