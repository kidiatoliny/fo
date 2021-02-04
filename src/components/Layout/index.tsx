import { Grid } from '@material-ui/core'
import { useStyles } from '~/config/useStyles'
import { useAuth } from '~/contexts/AuthProvider'
import { useUser } from '~/hooks/useUser'
import React, { useEffect, useState } from 'react'

import AppBar from '../AppBar'
import AppDrawer from '../AppDrawer'
import Loading from '../Loading'

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
