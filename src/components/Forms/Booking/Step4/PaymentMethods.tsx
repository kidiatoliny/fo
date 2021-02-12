import {
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  MenuItem,
  Typography,
  Box,
  Select
} from '@material-ui/core'
import { PaymentIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { usePayment } from '~/hooks/usePayment'
import { Field } from 'formik'
import React, { useState } from 'react'

import FaturationForm from './FaturationForm'
import PaymentDetails from './PaymentDetails'

const PaymentMethods: React.FC = () => {
  const { paymentMethods } = usePayment()
  const { paymentMethod, handlePaymentMethod } = useBooking()

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box mt={2} mb={4}>
          <Typography variant="h6">Pagamento</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel id="demo-simple-select-label">
            Métodos de Pagamento
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label=" Métodos de Pagamento"
            id="demo-simple-select"
            value={paymentMethod}
            onChange={handlePaymentMethod}
          >
            {paymentMethods.map(paymentMethod => (
              <MenuItem value={paymentMethod.id} key={paymentMethod.id}>
                {paymentMethod.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid item sm={6}>
        <PaymentDetails />
      </Grid> */}
    </Grid>
  )
}

export default PaymentMethods
