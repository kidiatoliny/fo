import { Drawer, Hidden, Toolbar } from '@material-ui/core'
import DashBoardIcon from '@material-ui/icons/Dashboard'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import { useStyles } from '~/src/config/useStyles'
import { useToggleDrawer } from '~/src/contexts/ToggleDrawerProvider'
import React from 'react'

import SimpleList from '../Lists/SimpleList'

const simpleList = [
  { title: 'Dashboard', icon: <DashBoardIcon />, link: '/dashboard' },
  { title: 'Venda/Reserva', icon: <LocalAtmIcon />, link: '/reservation' }
]
const AppDrawer: React.FC = () => {
  const { classes } = useStyles()
  const { toggle, handleToggle } = useToggleDrawer()
  const drawer = (
    <div className={classes.drawerContainer}>
      {simpleList.map(list => (
        <SimpleList
          title={list.title}
          icon={list.icon}
          link={list.link}
          key={list.title}
        />
      ))}
    </div>
  )
  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={toggle}
          onClose={handleToggle}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  )
}

export default AppDrawer
