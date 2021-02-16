import { Grid } from '@material-ui/core'
import { useStyles } from '~/config/useStyles'
import { useAuth } from '~/contexts/AuthProvider'
import React from 'react'
import { Redirect } from 'react-router-dom'

import AppBar from '../AppBar'
import AppDrawer from '../AppDrawer'
const Layout: React.FC = ({ children }) => {
  const { classes } = useStyles()
  const { token, isTokenExpired } = useAuth()
  if (!token || isTokenExpired) {
    return <Redirect to="/" />
  }
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
