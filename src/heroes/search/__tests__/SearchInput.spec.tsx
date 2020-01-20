import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchInput from '../SearchInput'

describe('SearchInput', () => {
  test('should render input with value as text', () => {
    const value = 'Spider-man'
    const { container } = render(
      <SearchInput value={value} onChange={jest.fn()} />
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="sc-AykKC cyoywi"
          data-testid="search-input"
          value="${value}"
        />
      </div>
     `)
  })

  test('should notify onChange:s from input field', () => {
    const onChange = jest.fn()
    const { getByDisplayValue } = render(
      <SearchInput value="Spider-M" onChange={onChange} />
    )
    const input = getByDisplayValue('Spider-M') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Spider-Ma' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
