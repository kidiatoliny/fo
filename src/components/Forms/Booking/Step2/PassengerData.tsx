import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import { UsersIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { usePassenger } from '~/hooks/usePassenger'
import { useTravel } from '~/hooks/useTravel'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'
const PassengerData: React.FC = () => {
  const { passenger } = useBooking()
  const { passengerFares } = useTravel()
  const { documentTypes } = usePassenger()
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label="Nome*"
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
              label=" Apelido*"
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
      </Grid>
      <Box>
        <Box marginTop={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="fare_id">Tipo de Passageiro*</InputLabel>
                <Field
                  required
                  component={Select}
                  label=" Tipo de Passageiro*"
                  name="fare_id"
                  inputProps={{
                    id: 'fare_id'
                  }}
                  value={passenger.fare_id}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineUserAdd />
                    </InputAdornment>
                  }
                >
                  {passengerFares?.map(fare => (
                    <MenuItem value={fare.id} key={fare.id}>
                      {fare.fare_description}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="document_type">Tipo documento*</InputLabel>
                <Field
                  component={Select}
                  required
                  label="Tipo de documento*"
                  name="document_type"
                  value={'' || passenger.document_type}
                  inputProps={{
                    id: 'document_type'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineFileSearch />
                    </InputAdornment>
                  }
                >
                  {documentTypes.map(document => (
                    <MenuItem value={document.id} key={document.id}>
                      {document.name}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Field
                component={TextField}
                variant="outlined"
                label=" Numero de documento*"
                name="document_data"
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
