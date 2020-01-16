import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { App } from './App'

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
  <ThemeProvider theme={lightTheme}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
