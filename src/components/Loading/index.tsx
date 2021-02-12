import { Box, CircularProgress, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'
const Loading: React.FC = () => {
  return (
    <Grid
      container
      style={{ minHeight: '100vh' }}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <CircularProgress disableShrink size={'3rem'} />
        <Box m={3}>
          <Typography> Por favor aguarde um momento ...</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Loading
