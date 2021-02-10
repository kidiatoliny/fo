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
import { AddUserIcon, UsersIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { usePassenger } from '~/hooks/usePassenger'
import { useTravel } from '~/hooks/useTravel'
import { BookingPassenger } from '~/store/ducks/bookings/types'
import { Field, Form, Formik } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useEffect, useState } from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'
const PassengerData: React.FC = () => {
  const { passengerCount, handleAddPassenger } = useBooking()
  const { getDocumentType, documentTypes } = usePassenger()
  const { passengerFares } = useTravel()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(passengerCount)
    getDocumentType()
  }, [])
  const [passenger, setPassenger] = useState<BookingPassenger>(
    {} as BookingPassenger
  )
  const initialValues = {} as BookingPassenger
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleAddPassenger(values)}
    >
      <Form>
        <Box marginBottom={4}>
          <Grid container spacing={4} direction="column">
            <Grid item xs={12}>
              <Box mt={2}>
                <Typography variant="h6">
                  Passageiro {total - passengerCount + 1}-{total}
                </Typography>
              </Box>
            </Grid>
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  component={TextField}
                  variant="outlined"
                  label="Nome"
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
                  required
                  variant="outlined"
                  label=" Apelido"
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
                <Grid item sm={6} md={4}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel htmlFor="fare_id">
                      Tipo de Passageiro
                    </InputLabel>
                    <Field
                      component={Select}
                      label=" Tipo de Passageiro"
                      name="fare_id"
                      inputProps={{
                        id: 'fare_id'
                      }}
                      displayEmpty
                      value={'' || passenger.fare_id}
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
                <Grid item sm={6} md={4}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel htmlFor="document_type">
                      Tipo documento
                    </InputLabel>
                    <Field
                      component={Select}
                      label="Tipo de documento"
                      name="document_type"
                      displayEmpty
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
                    label=" Numero de documento"
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
          <Grid item container justify="flex-end">
            <Grid item xs={12} md={6} lg={3}>
              <Box mt={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  endIcon={<AddUserIcon />}
                  type="submit"
                >
                  Adicionar Passageiro
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Formik>
  )
}

export default PassengerData
