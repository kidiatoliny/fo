import { Grid } from '@material-ui/core'
import { useStyles } from '~/config/useStyles'
import React from 'react'

import AppBar from '../AppBar'
import AppDrawer from '../AppDrawer'
const Layout: React.FC = ({ children }) => {
  const { classes } = useStyles()

  return (
    <Grid container>
      <AppBar />
      <AppDrawer />
      <Grid item className={classes.content}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
