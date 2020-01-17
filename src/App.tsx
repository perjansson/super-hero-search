import * as React from 'react'
import { Route, Switch } from 'react-router'

import Title from './components/Title'
import SearchPage from './pages/SearchPage'

const App = () => (
  <>
    <Title>Super Heroes Search App</Title>
    <Switch>
      <Route path="/" component={SearchPage} />
    </Switch>
  </>
)

export default App
