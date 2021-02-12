import { Box, Grid, Typography } from '@material-ui/core'
import { useBooking } from '~/contexts/BookingProvider'
import { useTravel } from '~/hooks/useTravel'
import React from 'react'

import PassengerPreview from './PassengerPreview'
import ReservationOwnerPreview from './ReservationOwnerPreview'
import VehiclePreview from './VehiclePreview'

const Step3: React.FC = () => {
  const { totalFare } = useTravel()
  const { vehicles } = useBooking()

  return (
    <>
      <ReservationOwnerPreview />
      <PassengerPreview />
      {vehicles.length > 0 && <VehiclePreview />}
      <Grid container>
        <Grid item container alignItems="center" justify="flex-end">
          <Typography variant="h6">Total:</Typography>
          <Box ml={1}>
            <Typography variant="body2">{totalFare()} $00</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Step3
