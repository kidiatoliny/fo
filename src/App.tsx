import { ThemeProvider } from '@material-ui/core'
import { theme } from '~/src/config/theme'
import React from 'react'

import { ToggleDrawerProvider } from './src/contexts/ToggleDrawerProvider'
import Routes from './src/routes'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToggleDrawerProvider>
        <Routes />
      </ToggleDrawerProvider>
    </ThemeProvider>
  )
}

export default App
