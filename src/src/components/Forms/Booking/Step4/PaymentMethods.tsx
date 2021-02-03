import {
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  MenuItem,
  Typography,
  Box
} from '@material-ui/core'
import { PaymentIcon } from '~/src/components/Icons'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import FaturationForm from './FaturationForm'

const PaymentMethods: React.FC = () => {
  return (
    <Grid container>
      <Grid item container>
        <Box mt={2} mb={4}>
          <Typography variant="h6">Pagamento</Typography>
        </Box>
      </Grid>
      <Grid item container sm={6}>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel htmlFor="departure">Metodos de Pagamento</InputLabel>
          <Field
            label="metodos de pagamento"
            component={Select}
            name="departure"
            inputProps={{
              id: 'departure'
            }}
            startAdornment={
              <InputAdornment position="start">
                <PaymentIcon />
              </InputAdornment>
            }
          >
            <MenuItem value={10}>SA/SV</MenuItem>
            <MenuItem value={20}>SV/SA</MenuItem>
          </Field>
        </FormControl>
        <Grid item container>
          <FaturationForm />
        </Grid>
      </Grid>
      <Grid item container sm={6}>
        detalhes de pagamento
      </Grid>
    </Grid>
  )
}

export default PaymentMethods
