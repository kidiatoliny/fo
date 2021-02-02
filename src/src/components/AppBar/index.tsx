import { Toolbar, AppBar as App, Typography } from '@material-ui/core'
import { useStyles } from '~/src/config/useStyles'
import React from 'react'

const AppBar: React.FC = () => {
  const { classes } = useStyles()
  return (
    <App position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography>Naviera Armas - Ticket Sales</Typography>
      </Toolbar>
    </App>
  )
}

export default AppBar
