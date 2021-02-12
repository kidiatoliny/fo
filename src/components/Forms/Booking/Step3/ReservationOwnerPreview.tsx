import {
  Box,
  Button,
  Grid,
  Typography,
  DialogContent,
  DialogActions,
  CircularProgress,
  Divider
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { PaymentIcon, ScheduleIcon } from '~/components/Icons'
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
    clearBooking
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
            title={`RESERVA ID - ${bookedTicket.id}`}
            open={open}
            onClose={closeModal}
            maxWidth="sm"
          >
            <DialogContent>
              <Grid container spacing={3} direction="column">
                <Grid item container direction="column" justify="center">
                  <Typography variant="h6">Titular da Reserva</Typography>

                  <Grid item container alignItems="center">
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
                <Divider />
                <Grid item container direction="column" justify="center">
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
              </Grid>
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
