import * as React from 'react'
import { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'

const SearchPage = lazy(() => import('./pages/SearchPage'))
import HeroPage from './pages/HeroPage'
import Title from './components/Title'

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingMessage = () => <div>...</div>

const App = () => (
  <>
    <Title>Super Heroes Search App</Title>
    <Suspense
      fallback={
        <LoadingIndicator>
          <LoadingMessage />
        </LoadingIndicator>
      }
    >
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/heroes/:id" component={HeroPage} />
      </Switch>
    </Suspense>
  </>
)

export default App
