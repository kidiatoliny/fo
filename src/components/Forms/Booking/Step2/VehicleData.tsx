import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import { VehicleIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useTravel } from '~/hooks/useTravel'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useEffect, useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoCarSport } from 'react-icons/io5'

const VehicleData: React.FC = () => {
  const { vehicleCount, handleAddVehicle } = useBooking()
  const { vehicleFares } = useTravel()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(vehicleCount)
  }, [])
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item>
              <Typography variant="h6">
                Veículo {total - vehicleCount + 1}-{total}
              </Typography>
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
                value=""
                inputProps={{
                  id: 'destination'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <IoCarSport />
                  </InputAdornment>
                }
              >
                {vehicleFares?.map(fare => (
                  <MenuItem value={fare.id} key={fare.id}>
                    {fare.fare_description}
                  </MenuItem>
                ))}
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
        <Grid item container justify="flex-end">
          <Grid item xs={12} md={6} lg={3}>
            <Box mt={4}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="button"
                endIcon={<VehicleIcon />}
                onClick={handleAddVehicle}
              >
                Adicionar Veiculo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default VehicleData
