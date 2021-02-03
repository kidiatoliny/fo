import { Box, Button, Grid, Hidden, Icon, Typography } from '@material-ui/core'
import {
  MailIcon,
  MobileIcon,
  PaymentIcon,
  PhoneIcon,
  ScheduleIcon,
  UserIcon
} from '~/src/components/Icons'
import React from 'react'
import { FiUsers } from 'react-icons/fi'

const ReservationOwnerPreview: React.FC = () => {
  return (
    <Box mb={5}>
      <Grid container spacing={4} direction="column">
        <Grid
          item
          container
          justify="space-between"
          alignItems="center"
          spacing={1}
          wrap="wrap"
        >
          <Hidden smDown>
            <Grid item container spacing={1} justify="flex-end">
              <Grid item md={2} xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<ScheduleIcon />}
                >
                  Reservar
                </Button>
              </Grid>
              <Grid item md={2} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<PaymentIcon />}
                >
                  Cobrar
                </Button>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Box>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>
            Titular da Reserva
          </Typography>
          <Grid container spacing={1} md={6}>
            <Grid item container alignItems="center" md={6}>
              <Icon>
                <UserIcon />
              </Icon>
              <Typography style={{ marginLeft: '1rem' }}>Jhon Doe</Typography>
            </Grid>
            <Grid item container style={{ marginTop: 4 }} md={6}>
              <Icon>
                <MailIcon />
              </Icon>
              <Typography style={{ marginLeft: '1rem' }}>
                example@example.com
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: 4 }} md={6}>
              <Icon>
                <MobileIcon />
              </Icon>
              <Typography style={{ marginLeft: '1rem' }}>999 99 99</Typography>
            </Grid>
            <Grid item container style={{ marginTop: 4 }} md={6}>
              <Icon>
                <PhoneIcon />
              </Icon>
              <Typography style={{ marginLeft: '1rem' }}>999 99 99</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default ReservationOwnerPreview
