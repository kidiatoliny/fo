import {
  Box,
  Button,
  Grid,
  Typography,
  DialogContent,
  DialogActions,
  CircularProgress,
  Divider,
  Avatar,
  DialogContentText,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import {
  MailIcon,
  MobileIcon,
  MoneyIcon,
  PaymentIcon,
  ScheduleIcon,
  UserIcon
} from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useModal } from '~/hooks/useModal'
import { usePayment } from '~/hooks/usePayment'
import React, { useEffect } from 'react'

import MainContactPreview from './MainContactPreview'
const ReservationOwnerPreview: React.FC = () => {
  const {
    nextStep,
    mainContact,
    handleReservation,
    isLoading,
    bookedTicket,
    clearBooking,
    passengers,
    vehicles
  } = useBooking()

  const { open, closeModal, openModal } = useModal()
  const { getPaymentMethods } = usePayment()

  useEffect(() => {
    bookedTicket.id && openModal()
  }, [bookedTicket])

  const handleBookingReservation = async () => {
    handleReservation()
  }

  const handleReservationPayment = () => {
    handleReservation()
    getPaymentMethods()
    nextStep()
  }

  const handleCloseModal = () => {
    closeModal()
    clearBooking()
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
          <Grid item container spacing={1} justify="flex-end">
            <Grid item md={2} xs={12}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={
                  isLoading ? (
                    <CircularProgress size="1rem" color="inherit" />
                  ) : (
                    <ScheduleIcon />
                  )
                }
                onClick={handleBookingReservation}
              >
                {isLoading ? 'Processando ...' : 'Reservar'}
              </Button>
            </Grid>
            <Grid item md={2} xs={12}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<PaymentIcon />}
                onClick={handleReservationPayment}
                color="primary"
              >
                Cobrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <MainContactPreview mainContact={mainContact} />
      </Grid>

      <Box>
        {bookedTicket.id && (
          <SimpleDialog
            title={`RESERVA  - #NVASV-${bookedTicket.id}`}
            open={open}
            onClose={closeModal}
            maxWidth="sm"
            disableBackdropClick
          >
            <DialogContent>
              <DialogContentText id="reservation">
                {bookedTicket.id && (
                  <>
                    <Grid container>
                      <Grid item xs={12}>
                        <Box m={2}>
                          <Typography variant="body1">
                            Titular da Reserva:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar>
                              <Icon>
                                <UserIcon />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${bookedTicket.first_name}  ${bookedTicket.last_name}`}
                          />
                        </ListItem>
                      </Grid>
                      <Grid item>
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar>
                              <Icon>
                                <MailIcon />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={bookedTicket.email} />
                        </ListItem>
                      </Grid>
                      <Grid item>
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar>
                              <Icon>
                                <MobileIcon />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={bookedTicket.mobile} />
                        </ListItem>
                      </Grid>
                    </Grid>
                    <Box m={2}>
                      <Divider />
                    </Box>
                    <Grid container>
                      <Grid item xs={12}>
                        <Box m={2}>
                          <Typography variant="body1">
                            Dados de Pagameto
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar>{passengers.length}</Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="passageiros" />
                        </ListItem>
                      </Grid>
                      <Grid item>
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar>{vehicles.length}</Avatar>
                          </ListItemAvatar>

                          <ListItemText primary="veiculos" />
                        </ListItem>
                      </Grid>
                      <Grid item>
                        <ListItem alignItems="center">
                          <ListItemAvatar>
                            <Avatar>
                              <Icon>
                                <MoneyIcon />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={bookedTicket.payment_data.total_booking}
                          />
                        </ListItem>
                      </Grid>
                    </Grid>
                  </>
                )}

                {/* <Grid container spacing={3} justify="space-around">
              <Grid item>
                <Typography variant="h6">Titular da Reserva</Typography>

                <Grid container alignItems="center">
                  <Typography variant="body2" style={{ marginRight: '1rem' }}>
                    <b>Nome:</b>
                  </Typography>
                  <Typography>
                    {bookedTicket.first_name} {bookedTicket.last_name}
                  </Typography>
                </Grid>
                <Grid item container alignItems="center">
                  <Typography variant="body2" style={{ marginRight: '1rem' }}>
                    <b>Email:</b>
                  </Typography>
                  <Typography>{bookedTicket.email}</Typography>
                </Grid>
                <Grid item container alignItems="center">
                  <Typography variant="body2" style={{ marginRight: '1rem' }}>
                    <b>Contato:</b>
                  </Typography>
                  <Typography>{bookedTicket.mobile}</Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="h6">Detalhes de Pagamento</Typography>

                <Grid item container alignItems="center">
                  <Typography variant="body2" style={{ marginRight: '1rem' }}>
                    <b>Bilhte:</b>
                  </Typography>
                  <Typography>
                    {bookedTicket.payment_data.ticket_amount} $00
                  </Typography>
                </Grid>
                <Grid item container alignItems="center">
                  <Typography variant="body2" style={{ marginRight: '1rem' }}>
                    <b>Taxas:</b>
                  </Typography>
                  <Typography>
                    {bookedTicket.payment_data.ticket_tax_amount} $00
                  </Typography>
                </Grid>
                <Grid item container alignItems="center">
                  <Typography variant="body2" style={{ marginRight: '1rem' }}>
                    <b>Total:</b>
                  </Typography>
                  <Typography>
                    {bookedTicket.payment_data.total_booking} $00
                  </Typography>
                </Grid>
              </Grid>
            </Grid> */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseModal}
                color="primary"
                variant="contained"
              >
                OK
              </Button>
            </DialogActions>
          </SimpleDialog>
        )}
      </Box>
    </Box>
  )
}

export default ReservationOwnerPreview
