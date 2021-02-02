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
        width: drawerWidth,
        flexShrink: 0
      },
      drawerPaper: {
        width: drawerWidth
      },
      drawerContainer: {
        overflow: 'auto',
        paddingTop: 70
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      }
    })
  )
  const classes = styles()
  return { classes }
}
