import * as React from 'react'
import { Hero } from '../types'

interface Props {
  result: Hero[]
}

const SearchResult = ({ result }: Props) => {
  return <div>{JSON.stringify(result)}</div>
}

export default SearchResult
