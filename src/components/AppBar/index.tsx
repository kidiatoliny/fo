import {
  Toolbar,
  AppBar as App,
  Typography,
  IconButton,
  Hidden,
  Box,
  Menu,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from '~/config/useStyles'
import { useAuth } from '~/contexts/AuthProvider'
import { useToggleDrawer } from '~/contexts/ToggleDrawerProvider'
import { useUser } from '~/hooks/useUser'
import React from 'react'

import { UserIcon } from '../Icons'

const AppBar: React.FC = () => {
  const { classes } = useStyles()
  const { handleToggle } = useToggleDrawer()
  const { profile } = useUser()
  const { logout } = useAuth()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const isMenuOpen = Boolean(anchorEl)
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="profile"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Meu Perfil</MenuItem>
      <MenuItem onClick={() => logout()}>Terminar Sessão</MenuItem>
    </Menu>
  )
  return (
    <>
      <App position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden xlUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography style={{ flexGrow: 1 }}>
            Naviera Armas - Ticket Sales
          </Typography>
          <Box
            onClick={handleProfileMenuOpen}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <Typography>{profile.username}</Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="userprofile"
              aria-haspopup="true"
              color="inherit"
            >
              <UserIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </App>
      {renderMenu}
    </>
  )
}

export default AppBar
