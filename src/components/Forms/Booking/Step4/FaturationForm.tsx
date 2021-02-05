import {
  Box,
  Grid,
  InputAdornment,
  Switch,
  Typography
} from '@material-ui/core'
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
  UsersIcon
} from '~/components/Icons'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React, { useState } from 'react'

const FaturationForm: React.FC = () => {
  const [isFaturation, setIsFaturation] = useState(true)
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item container>
              <Typography variant="h6">Dados de Faturacao</Typography>
              <Switch
                checked={isFaturation}
                onChange={() => setIsFaturation(prev => !prev)}
              />
            </Grid>
          </Box>
        </Grid>
        {isFaturation && (
          <>
            {' '}
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label=" Nome Completo"
                  name="first_name"
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
                  label=" N.I.F"
                  name="last_name"
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
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="E-mail"
                  name="first_name"
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
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Contato"
                  name="last_name"
                  size="small"
                  fullWidth
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
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Morada"
                  name="last_name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default FaturationForm
