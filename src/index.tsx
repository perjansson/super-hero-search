import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'

import lightTheme from './theme/light'
import store from './store/store'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  console.log('Will install ServiceWorker')
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err)
      })
  })
}

const history = createBrowserHistory()

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
