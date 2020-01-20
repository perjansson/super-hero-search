import React from 'react'
import { render } from '@testing-library/react'
import Error from '../Error'

describe('Error', () => {
  test('should render error message', () => {
    const message = 'Oh snap!'
    const error = { message, name: 'Network error' }
    const { getByRole } = render(<Error error={error} />)
    expect(getByRole('alert')).toHaveTextContent(message)
  })
})
