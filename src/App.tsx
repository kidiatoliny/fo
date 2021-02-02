import { ThemeProvider } from '@material-ui/core'
import { theme } from '~/src/config/theme'
import React from 'react'

import Routes from './src/routes'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
