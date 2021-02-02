import { CssBaseline, Grid } from '@material-ui/core'
import React from 'react'

import AppBar from '../AppBar'
import AppDrawer from '../AppDrawer'

const Layout: React.FC = ({ children }) => {
  return (
    <Grid container direction="column">
      <AppBar />
      <AppDrawer />
      <Grid item xs={12}></Grid>
      <Grid item container>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
