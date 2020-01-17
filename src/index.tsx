import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'

import store from './store/store'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'

const history = createBrowserHistory()

const lightTheme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#222222',
    tertiary: '#4B4E6D',
    quaternary: '#84DCC6',
    quinary: '#95A3B3',
  },
}

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
