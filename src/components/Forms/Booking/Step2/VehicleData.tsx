import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoCarSport } from 'react-icons/io5'

const VehicleData: React.FC = () => {
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item>
              <Typography variant="h6">Veículo 1/1</Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item container spacing={4} wrap="wrap">
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              placeholder="eg. Toyota"
              variant="outlined"
              label=" Marca"
              name="first_name"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoCarSport />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Modelo"
              placeholder="eg. Hilux"
              name="last_name"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoCarSport />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth size="small" variant="outlined">
              <InputLabel htmlFor="destination">Tipo de veículo</InputLabel>
              <Field
                component={Select}
                label=" Tipo de veiculo"
                name="destination"
                inputProps={{
                  id: 'destination'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <IoCarSport />
                  </InputAdornment>
                }
              >
                <MenuItem value={10}>SA/SV</MenuItem>
                <MenuItem value={20}>SV/SA</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Matricula"
              placeholder="xx-xx-xx"
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
      </Grid>
    </Box>
  )
}

export default VehicleData
