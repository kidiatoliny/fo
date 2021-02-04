import { Drawer, Hidden, Toolbar } from '@material-ui/core'
import DashBoardIcon from '@material-ui/icons/Dashboard'
import { useStyles } from '~/config/useStyles'
import { useToggleDrawer } from '~/contexts/ToggleDrawerProvider'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { SearchIcon } from '../Icons'
import SimpleList from '../Lists/SimpleList'

const simpleList = [
  { title: 'Dashboard', icon: <DashBoardIcon />, link: '/dashboard' },
  {
    title: 'Procurar',
    icon: <SearchIcon />,
    link: '/search'
  },
  {
    title: 'Venda/Reserva',
    icon: <AiOutlineShoppingCart />,
    link: '/reservation'
  }
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
