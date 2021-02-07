import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import { UsersIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { format } from 'date-fns'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'
const PassengerData: React.FC = () => {
  const { departureDate } = useBooking()
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item>
              <Typography variant="h6">Passageiro 1/1</Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Field
              required
              component={TextField}
              variant="outlined"
              label=" Nome"
              name="passengers[0].first_name"
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
              required
              variant="outlined"
              label=" Apelido"
              name="passengers[0].last_name"
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
      </Grid>
      <Box>
        <Box marginTop={3}>
          <Grid container spacing={1}>
            <Grid item sm={6} md={4}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="fare_id">Tipo de Passageiro</InputLabel>
                <Field
                  component={Select}
                  label=" Tipo de Passageiro"
                  name="passengers[0].fare_id"
                  inputProps={{
                    id: 'fare_id'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineUserAdd />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={10}>SA/SV</MenuItem>
                  <MenuItem value={20}>SV/SA</MenuItem>
                </Field>
              </FormControl>
              <Field
                type="hidden"
                name="passengers[0].routes[0].route_id"
                value="1"
              />
              <Field
                type="hidden"
                name="passengers[0].routes[0].schedule_id"
                value="1"
              />
              <Field
                value={departureDate && format(departureDate, 'yyy-MM-dd')}
                type="hidden"
                name="passengers[0].routes[0].schedule_date"
              />
            </Grid>
            <Grid item sm={6} md={4}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="document_type">Tipo documento</InputLabel>
                <Field
                  component={Select}
                  label="Tipo de documento"
                  name="passengers[0].document_type"
                  inputProps={{
                    id: 'document_type'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineFileSearch />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={10}>SA/SV</MenuItem>
                  <MenuItem value={20}>SV/SA</MenuItem>
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Field
                component={TextField}
                variant="outlined"
                label=" Numero de documento"
                name="passengers[0].document_number"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiOutlineHashtag />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default PassengerData
