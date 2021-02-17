import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { useToggleDrawer } from '~/contexts/ToggleDrawerProvider'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export interface NestedList {
  label: string
  icon: React.ReactElement
  link: string
}
export interface NestedListProps {
  label: string
  icon: React.ReactElement
  childs: NestedList[]
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4)
    },
    opened: {
      background: '#d1d1d1'
    },
    active: {
      borderRight: '4px solid' + theme.palette.primary.light
    }
  })
)
const NestedList: React.FC<NestedListProps> = ({ label, icon, childs }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()
  const history = useHistory()
  const { handleToggle } = useToggleDrawer()
  const handleListChildClick = (link: string) => {
    history.push(link)
    handleToggle()
  }
  const handleOpenList = () => {
    setOpen(!open)
  }
  return (
    <List>
      <ListItem
        button
        onClick={handleOpenList}
        className={open ? classes.opened : ''}
      >
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {childs.map((child, index) => (
          <List
            component="div"
            disablePadding
            key={index}
            className={pathname === child.link ? classes.active : ''}
            onClick={() => handleListChildClick(child.link)}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>{child.icon}</ListItemIcon>
              <ListItemText primary={child.label} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </List>
  )
}

export default NestedList
