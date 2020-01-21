import * as React from 'react'
import {
  useRef,
  useImperativeHandle,
  forwardRef,
  RefForwardingComponent,
  ChangeEvent,
} from 'react'
import styled from 'styled-components'

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

interface Props {
  value?: string
  placeholder?: string
  onChange: (query: string) => void
}

export interface SearchInputHandles {
  focus(): void
}

const SearchInput: RefForwardingComponent<SearchInputHandles, Props> = (
  { value, onChange, ...rest }: Props,
  ref
) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    onChange(newValue)
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus()
      }
    },
  }))

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={handleInputChange}
      {...rest}
    />
  )
}

export default forwardRef(SearchInput)
