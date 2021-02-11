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
import { AddUserIcon, StopIcon, UsersIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useModal } from '~/hooks/useModal'
import { usePassenger } from '~/hooks/usePassenger'
import { useTravel } from '~/hooks/useTravel'
import { BookingPassenger } from '~/store/ducks/bookings/types'
import { passengerValidation } from '~/validations/passengerValidation'
import { Field, Form, Formik } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useEffect, useState } from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'
const PassengerForm: React.FC = ({ children }) => {
  const { passengerCount, handleAddPassenger, passenger } = useBooking()
  const { passengerFares } = useTravel()
  const [total, setTotal] = useState(0)
  const { documentTypes } = usePassenger()
  const defaultFareValue = passengerFares?.find(e => e.fare_code === 'PAXSTD')
  const defaultDocumentTypeValue = documentTypes.find(e => e.code === 'CNI')
  useEffect(() => {
    setTotal(passengerCount)
  }, [])

  const initialValues = {
    first_name: '',
    last_name: '',
    fare_id: passenger.fare_id,
    document_type: passenger.document_type,
    document_data: ''
  } as BookingPassenger

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={passengerValidation}
      onSubmit={(values, helpers) => {
        handleAddPassenger(values)
        helpers.resetForm()
      }}
    >
      {({ isValid }) => (
        <Form autoComplete="off">
          <Box marginBottom={4}>
            <Grid container spacing={4} direction="column">
              <Grid item xs={12}>
                <Box mt={2}>
                  <Typography variant="h6">
                    Passageiro {total - passengerCount + 1}-{total}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {children}
            <Grid item container justify="flex-end">
              <Grid item xs={12} md={6} lg={3}>
                <Box mt={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    endIcon={isValid ? <AddUserIcon /> : <StopIcon />}
                    type="submit"
                  >
                    Adicionar Passageiro
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default PassengerForm
