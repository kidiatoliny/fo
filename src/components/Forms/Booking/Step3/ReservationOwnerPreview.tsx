import {
  Box,
  Button,
  Grid,
  Hidden,
  Typography,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { PaymentIcon, ScheduleIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useModal } from '~/hooks/useModal'
import React from 'react'

import MainContactPreview from './MainContactPreview'
const ReservationOwnerPreview: React.FC = () => {
  const { nextStep, mainContact } = useBooking()

  const { open, closeModal, openModal } = useModal()

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
                  onClick={openModal}
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
        <MainContactPreview mainContact={mainContact} />
      </Grid>

      <Box>
        <SimpleDialog
          title="RESERVADO COM SUCESSO"
          open={open}
          onClose={closeModal}
          maxWidth="md"
        >
          <DialogContent>
            <DialogContentText id="reservation">
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                <b> Codigo de Reserva</b> - <i> #uy32789j</i>
              </Typography>
              <MainContactPreview mainContact={mainContact} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="primary" variant="contained">
              OK
            </Button>
          </DialogActions>
        </SimpleDialog>
      </Box>
    </Box>
  )
}

export default ReservationOwnerPreview
