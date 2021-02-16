import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Box,
  Select,
  FormHelperText
} from '@material-ui/core'
import { useBooking } from '~/contexts/BookingProvider'
import { usePayment } from '~/hooks/usePayment'
import React from 'react'

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
            error={!paymentMethod}
          >
            {paymentMethods.map(paymentMethod => (
              <MenuItem value={paymentMethod.id} key={paymentMethod.id}>
                {paymentMethod.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>
            {!paymentMethod && 'Selecione o método de Pagamento'}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default PaymentMethods
