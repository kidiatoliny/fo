import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Switch,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { useBooking } from '~/contexts/BookingProvider'
import { useTravel } from '~/hooks/useTravel'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { DatePicker } from 'formik-material-ui-pickers'
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const SearchTravel: React.FC = () => {
  const {
    setDepartureDate,
    departureDate,
    departureId,
    handleDepartureId,
    locations,
    destination,
    destinationId,
    handleDestinationId,
    departureScheduleId,
    handleDepartureScheduleId,
    isReturnedTravel,
    setReturnedTravel,
    passengerCount,
    vehicleCount,
    handleReturnScheduleId
  } = useBooking()

  const { departureSchedules, returnSchedules } = useTravel()
  const [returnDate, setReturnDate] = useState<MaterialUiPickersDate>()

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container spacing={4} direction="column">
      {passengerCount}-{vehicleCount}
      <Grid item xs={12}>
        <Box mt={isSmall ? 0 : 6}>
          <Grid item container>
            <Typography variant="h6">Viagem Ida e volta</Typography>
            <Switch
              checked={isReturnedTravel}
              onChange={() => setReturnedTravel(prev => !prev)}
            />
          </Grid>
        </Box>
      </Grid>
      {/* traveel */}
      <Grid item container spacing={4}>
        <Grid item container sm={6}>
          <FormControl fullWidth size="small" variant="outlined">
            <InputLabel htmlFor="departure">Porto de Origem</InputLabel>
            <Field
              label="Selecionar Porto de Origem"
              component={Select}
              name="departure"
              value={departureId}
              onChange={handleDepartureId}
              inputProps={{
                id: 'departure'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <HiOutlineLocationMarker />
                </InputAdornment>
              }
            >
              {locations.map(location => (
                <MenuItem value={location.id} key={location.id}>
                  {location.name_1}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
        <Grid item container sm={6}>
          <FormControl fullWidth size="small" variant="outlined">
            <InputLabel htmlFor="destination">Porto de destino</InputLabel>
            <Field
              component={Select}
              label=" Selecionar Porto de Origem"
              name="destination"
              value={destinationId}
              disabled={!departureId}
              onChange={handleDestinationId}
              inputProps={{
                id: 'destination'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <HiOutlineLocationMarker />
                </InputAdornment>
              }
            >
              {destination.map(location => (
                <MenuItem value={location.id} key={location.id}>
                  {location.name_1}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
      </Grid>
      {/* travel date */}
      <Grid item container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Field
            component={DatePicker}
            label="Data de Partida"
            name="departureDate"
            inputVariant="outlined"
            minDate={new Date()}
            size="small"
            value={departureDate}
            onChange={setDepartureDate}
            fullWidth
            format="dd-MMMM-yyyy"
            disabled={!destinationId}
          />
        </Grid>
        <Grid item container sm={6} md={3}>
          <FormControl fullWidth size="small" variant="outlined">
            <InputLabel htmlFor="destination">Hora de embarque</InputLabel>
            <Field
              component={Select}
              label=" Selecionar Porto de Origem"
              name="departure_schedule_id"
              disabled={!destinationId || !departureDate}
              value={departureScheduleId}
              onChange={handleDepartureScheduleId}
              inputProps={{
                id: 'departure_schedule'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <AiOutlineClockCircle />
                </InputAdornment>
              }
            >
              {departureSchedules?.map(schedule => (
                <MenuItem value={schedule.id} key={schedule.id}>
                  {schedule.departure_time}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
        </Grid>
        {isReturnedTravel && (
          <>
            <Grid item xs={12} sm={6} md={3}>
              <Field
                component={DatePicker}
                label="Data de retorno"
                name="return"
                inputVariant="outlined"
                minDate={new Date()}
                size="small"
                value={returnDate}
                disabled={!departureScheduleId}
                onChange={setReturnDate}
                fullWidth
                views={['year', 'month', 'date']}
                format="dd-MMMM-yyyy"
              />
            </Grid>
            <Grid item container sm={6} md={3}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="destination">Hora de retorno</InputLabel>
                <Field
                  component={Select}
                  label=" Selecionar hora de retorno"
                  name="return_schedule_id"
                  onChange={handleReturnScheduleId}
                  // disabled={!returnDate}
                  inputProps={{
                    id: 'return_schedule'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineClockCircle />
                    </InputAdornment>
                  }
                >
                  {returnSchedules?.map(schedule => (
                    <MenuItem value={schedule.id} key={schedule.id}>
                      {schedule.departure_time}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  )
}

export default SearchTravel
