import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { useStyles } from '~/src/config/useStyles'
import { useToggleDrawer } from '~/src/contexts/ToggleDrawerProvider'
import React, { ReactElement } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

interface SimpleListProps {
  icon?: ReactElement
  title: string
  link: string
}
const SimpleList: React.FC<SimpleListProps> = ({ icon, title, link }) => {
  const history = useHistory()
  const { handleToggle } = useToggleDrawer()
  const { pathname } = useLocation()
  const { classes } = useStyles()
  const handleIcon = () => {
    history.push(link)
    handleToggle()
  }
  return (
    <List component="nav" aria-label={title}>
      <ListItem
        button
        onClick={handleIcon}
        className={pathname === link ? classes.active : ''}
      >
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </List>
  )
}

export default SimpleList
