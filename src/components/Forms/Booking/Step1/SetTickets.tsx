import { Grid, TextField, InputAdornment, Box } from '@material-ui/core'
import { useBooking } from '~/contexts/BookingProvider'
import { Field } from 'formik'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoCarSport } from 'react-icons/io5'

const SetTickets: React.FC = () => {
  const { handlePassengerCount, handleVehicleCount } = useBooking()
  return (
    <Box mt={2}>
      <Grid container spacing={4}>
        <Grid item container sm={6} md={3}>
          <Field
            component={TextField}
            variant="outlined"
            label=" Numero de Passageiros"
            name="passenger_number"
            size="small"
            onChange={handlePassengerCount}
            fullWidth
            required
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiUsers />
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item container sm={6} md={3}>
          <Field
            component={TextField}
            variant="outlined"
            label=" Numero de Veiculos"
            name="vehicle_number"
            size="small"
            fullWidth
            type="number"
            onChange={handleVehicleCount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoCarSport />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SetTickets
