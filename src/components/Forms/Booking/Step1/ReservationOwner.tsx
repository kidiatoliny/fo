import { Box, Grid, InputAdornment, Typography } from '@material-ui/core'
import { UsersIcon, MailIcon, MobileIcon, PhoneIcon } from '~/components/Icons'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
const ReservationOwnerForm: React.FC = () => {
  return (
    <Box mb={5}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item>
              <Typography variant="h6">Titular da Reserva</Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label="Nome*"
              name="main_contact.first_name"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <UsersIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Apelido*"
              name="main_contact.last_name"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <UsersIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Field
              component={TextField}
              variant="outlined"
              label="E-mail*"
              name="main_contact.email"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Movel*"
              name="main_contact.mobile"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MobileIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Telefone"
              name="main_contact.phone"
              size="small"
              fullWidth
              validateOnBlur
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ReservationOwnerForm
