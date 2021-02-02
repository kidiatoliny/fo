import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = () => {
  const drawerWidth = 240
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex'
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0
        }
      },
      drawerPaper: {
        width: drawerWidth
      },
      drawerContainer: {
        overflow: 'auto'
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: theme.spacing(5)
      },

      menuButton: {
        marginRight: theme.spacing(2)
      },
      hide: {
        display: 'none'
      }
    })
  )
  const classes = styles()
  return { classes }
}
