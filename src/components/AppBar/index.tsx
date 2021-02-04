import {
  Toolbar,
  AppBar as App,
  Typography,
  IconButton,
  Hidden
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from '~/config/useStyles'
import { useToggleDrawer } from '~/contexts/ToggleDrawerProvider'
import React from 'react'
const AppBar: React.FC = () => {
  const { classes } = useStyles()
  const { handleToggle } = useToggleDrawer()
  return (
    <>
      <App position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography>Naviera Armas - Ticket Sales</Typography>
        </Toolbar>
      </App>
    </>
  )
}

export default AppBar
