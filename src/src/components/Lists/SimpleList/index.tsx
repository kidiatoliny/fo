import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { useToggleDrawer } from '~/src/contexts/ToggleDrawerProvider'
import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

interface SimpleListProps {
  icon?: ReactElement
  title: string
  link: string
}
const SimpleList: React.FC<SimpleListProps> = ({ icon, title, link }) => {
  const history = useHistory()
  const { handleToggle } = useToggleDrawer()
  const handleIcon = () => {
    history.push(link)
    handleToggle()
  }
  return (
    <List component="nav" aria-label={title}>
      <ListItem button onClick={handleIcon}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </List>
  )
}

export default SimpleList
