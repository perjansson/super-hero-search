import * as React from 'react'
import styled from 'styled-components'

interface Props {
  value?: string
  placeholder?: string
  onChange: (query: string) => void
}

const Input = styled.input.attrs({ 'data-testid': 'search-input' })`
  text-align: center;
  font-size: 1.4em;
  color: ${props => props?.theme?.colors?.tertiary};
  border: none;
  border-bottom: ${props => `1px solid ${props?.theme?.colors?.tertiary}`};
  margin: 0;
  width: 80%;
  background: none;
  outline: none;

  &:focus {
    border-bottom: ${props => `4px solid ${props?.theme?.colors?.tertiary}`};
  }
`

const SearchInput = ({ value, onChange, ...rest }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    onChange(newValue)
  }

  return <Input value={value} onChange={handleInputChange} {...rest} />
}

export default SearchInput
