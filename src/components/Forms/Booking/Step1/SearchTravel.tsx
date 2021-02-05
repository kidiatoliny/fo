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
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { DatePicker } from 'formik-material-ui-pickers'
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const SearchTravel: React.FC = () => {
  const [departureDate, setDepartureDate] = useState<MaterialUiPickersDate>()
  const [returnDate, setReturnDate] = useState<MaterialUiPickersDate>()
  const [isReturnedTravel, setReturnedTravel] = useState(false)
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container spacing={4} direction="column">
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
              inputProps={{
                id: 'departure'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <HiOutlineLocationMarker />
                </InputAdornment>
              }
            >
              <MenuItem value={10}>SA/SV</MenuItem>
              <MenuItem value={20}>SV/SA</MenuItem>
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
              inputProps={{
                id: 'destination'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <HiOutlineLocationMarker />
                </InputAdornment>
              }
            >
              <MenuItem value={10}>SA/SV</MenuItem>
              <MenuItem value={20}>SV/SA</MenuItem>
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
            name="departure"
            inputVariant="outlined"
            minDate={new Date()}
            size="small"
            value={departureDate}
            onChange={setDepartureDate}
            fullWidth
            views={['year', 'month', 'date']}
            format="dd-MMMM-yyyy"
          />
        </Grid>
        <Grid item container sm={6} md={3}>
          <FormControl fullWidth size="small" variant="outlined">
            <InputLabel htmlFor="destination">Hora de embarque</InputLabel>
            <Field
              component={Select}
              label=" Selecionar Porto de Origem"
              name="destination"
              inputProps={{
                id: 'destination'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <AiOutlineClockCircle />
                </InputAdornment>
              }
            >
              <MenuItem value={10}>SA/SV</MenuItem>
              <MenuItem value={20}>SV/SA</MenuItem>
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
                  label=" Selecionar Porto de Origem"
                  name="destination"
                  inputProps={{
                    id: 'destination'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineClockCircle />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={10}>SA/SV</MenuItem>
                  <MenuItem value={20}>SV/SA</MenuItem>
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
