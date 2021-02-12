import { Grid } from '@material-ui/core'
import Loading from '~/components/Loading'
import { useBooking } from '~/contexts/BookingProvider'
import React from 'react'

import FaturationForm from './FaturationForm'
import PaymentDetails from './PaymentDetails'
import PaymentMethods from './PaymentMethods'

const Step4: React.FC = () => {
  const { isLoading } = useBooking()

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} direction="column">
          <Grid item>
            <PaymentMethods />
          </Grid>
          <Grid item>
            <FaturationForm />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <PaymentDetails />
        </Grid>
      </Grid>
    </>
  )
}

export default Step4
