import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import { useBooking } from '~/contexts/BookingProvider'
import { useTravel } from '~/hooks/useTravel'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoCarSport } from 'react-icons/io5'
const VehicleData: React.FC = () => {
  const { vehicle } = useBooking()
  const { vehicleFares } = useTravel()
  return (
    <Grid item container spacing={4} wrap="wrap">
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          placeholder="eg. Toyota"
          variant="outlined"
          label=" Marca*"
          name="brand"
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
          label=" Modelo*"
          placeholder="eg. Hilux"
          name="model"
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
          <InputLabel htmlFor="destination">Tipo de veículo*</InputLabel>
          <Field
            component={Select}
            label=" Tipo de veiculo"
            name="fare_id"
            required
            inputProps={{
              id: 'destination'
            }}
            displayEmpty
            value={'' || vehicle.fare_id}
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
          label=" Matricula*"
          placeholder="xx-xx-xx"
          helperText="matricula deverá ser no formato xx-xx-xx"
          name="register_id"
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
  )
}

export default VehicleData
