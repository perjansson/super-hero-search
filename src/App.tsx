import * as React from 'react'
import { Route, Switch } from 'react-router'

import Title from './components/Title'
import SearchPage from './pages/SearchPage'
import HeroPage from './pages/HeroPage'

const App = () => (
  <>
    <Title>Super Heroes Search App</Title>
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/heroes/:id" component={HeroPage} />
    </Switch>
  </>
)

export default App
