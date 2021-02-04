import DateFnsUtils from '@date-io/date-fns'
import { ThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { theme } from '~/config/theme'
import pt from 'date-fns/locale/pt'
import React from 'react'
import { Provider } from 'react-redux'

import { ToggleDrawerProvider } from './contexts/ToggleDrawerProvider'
import Routes from './routes'
import { store } from './store'
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
          <ToggleDrawerProvider>
            <Routes />
          </ToggleDrawerProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
