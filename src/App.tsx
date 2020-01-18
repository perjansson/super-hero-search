import * as React from 'react'
import { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'

const SearchPage = lazy(() => import('./pages/SearchPage'))
import HeroPage from './pages/HeroPage'
import Header from './components/Header'

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingMessage = () => <div>...</div>

const Main = styled.main`
  padding: 20px;
`

const App = () => (
  <>
    <Header>Super Heroes Search App</Header>
    <Main>
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
    </Main>
  </>
)

export default App
