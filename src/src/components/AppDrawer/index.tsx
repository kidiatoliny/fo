import { createStyles, Drawer, makeStyles, Theme } from '@material-ui/core'
import { useStyles } from '~/src/config/useStyles'
import React from 'react'

import SimpleList from '../Lists/SimpleList'

const AppDrawer: React.FC = () => {
  const { classes } = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerContainer}>
        <SimpleList />
        <SimpleList />
        <SimpleList />
      </div>
    </Drawer>
  )
}

export default AppDrawer
