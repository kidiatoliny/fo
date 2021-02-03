import {
  Grid,
  Box,
  Typography,
  InputAdornment,
  TextField
} from '@material-ui/core'
import { Field } from 'formik'
import React from 'react'
import { FiPhone, FiSmartphone, FiUsers } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const ReservationOwner: React.FC = () => {
  return (
    <Grid container spacing={4} direction="column">
      <Grid item xs={12}>
        <Box mt={2}>
          <Grid item>
            <Typography variant="h6">Titular da Reserva</Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={12} sm={6} md={5}>
          <Field
            component={TextField}
            variant="outlined"
            label=" Nome"
            name="first_name"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiUsers />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Field
            component={TextField}
            variant="outlined"
            label=" Apelido"
            name="last_name"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiUsers />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Field
            component={TextField}
            variant="outlined"
            label="E-mail"
            name="last_name"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineMail />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Field
            component={TextField}
            variant="outlined"
            label=" Telefone"
            name="last_name"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiPhone />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Field
            component={TextField}
            variant="outlined"
            label=" Movel"
            name="last_name"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSmartphone />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReservationOwner
