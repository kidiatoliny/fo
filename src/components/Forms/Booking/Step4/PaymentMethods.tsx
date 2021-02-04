import {
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  MenuItem,
  Typography,
  Box,
  Icon,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import {
  MailIcon,
  MobileIcon,
  PaymentIcon,
  PhoneIcon,
  UserIcon
} from '~/components/Icons'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import React, { useState } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import FaturationForm from './FaturationForm'
import PaymentDetails from './PaymentDetails'

const PaymentMethods: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box mt={2} mb={4}>
          <Typography variant="h6">Pagamento</Typography>
        </Box>
      </Grid>
      <Grid item sm={6}>
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
        <Grid item>
          <FaturationForm />
        </Grid>
      </Grid>
      <Grid item sm={6}>
        <PaymentDetails />
      </Grid>
    </Grid>
  )
}

export default PaymentMethods
