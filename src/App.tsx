import * as React from 'react'

import Title from './components/Title'
import Hidden from './components/Hidden'
import { API_TOKEN } from './constants'

const App = () => (
  <>
    <Title>Super Heroes Search App</Title>
    <Hidden>{API_TOKEN}</Hidden>
  </>
)

export default App
