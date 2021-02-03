import DateFnsUtils from '@date-io/date-fns'
import { ThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { theme } from '~/src/config/theme'
import pt from 'date-fns/locale/pt'
import React from 'react'

import { ToggleDrawerProvider } from './src/contexts/ToggleDrawerProvider'
import Routes from './src/routes'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
        <ToggleDrawerProvider>
          <Routes />
        </ToggleDrawerProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
