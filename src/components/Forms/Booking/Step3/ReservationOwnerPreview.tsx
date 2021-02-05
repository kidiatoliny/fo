import {
  Box,
  Button,
  Grid,
  Hidden,
  Icon,
  Typography,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import {
  MailIcon,
  MobileIcon,
  PaymentIcon,
  PhoneIcon,
  ScheduleIcon,
  UserIcon
} from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import React from 'react'
const ReservationOwnerPreview: React.FC = () => {
  const { nextStep } = useBooking()
  const [isReservationModalOpen, setIsReservationModalOpen] = React.useState(
    false
  )

  const handleReservationModalOpen = () => {
    setIsReservationModalOpen(true)
  }
  const handleReservationModalClose = () => {
    setIsReservationModalOpen(false)
  }
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
                  onClick={handleReservationModalOpen}
                >
                  Reservar
                </Button>
              </Grid>
              <Grid item md={2} xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<PaymentIcon />}
                  onClick={() => nextStep()}
                  color="primary"
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
      {/* reservation Dialog */}
      <Box>
        <SimpleDialog
          title="RESERVADO COM SUCESSO"
          open={isReservationModalOpen}
          onClose={handleReservationModalClose}
        >
          <DialogContent>
            <DialogContentText id="reservation">
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                <b> Codigo de Reserva</b> - <i> #uy32789j</i>
              </Typography>

              <Box>
                <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                  <b>Titular da Reserva</b>
                </Typography>
                <Grid container spacing={1} md={10}>
                  <Grid item container alignItems="center" md={6}>
                    <Icon>
                      <UserIcon />
                    </Icon>
                    <Typography style={{ marginLeft: '1rem' }}>
                      Jhon Doe
                    </Typography>
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
                    <Typography style={{ marginLeft: '1rem' }}>
                      999 99 99
                    </Typography>
                  </Grid>
                  <Grid item container style={{ marginTop: 4 }} md={6}>
                    <Icon>
                      <PhoneIcon />
                    </Icon>
                    <Typography style={{ marginLeft: '1rem' }}>
                      999 99 99
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleReservationModalClose}
              color="primary"
              variant="contained"
            >
              OK
            </Button>
          </DialogActions>
        </SimpleDialog>
      </Box>
    </Box>
  )
}

export default ReservationOwnerPreview
