import { Button, Grid } from '@material-ui/core'
import { NextIcon, StopIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { usePassenger } from '~/hooks/usePassenger'
import { BookingMainContact } from '~/store/ducks/bookings/types'
import { step1Validation } from '~/validations/step1Validation'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'

import ReservationOwner from './ReservationOwner'
import SearchTravel from './SearchTravel'
import SetTickets from './SetTickets'

const Step1: React.FC = () => {
  const { nextStep, handleMainContact } = useBooking()
  const { getDocumentType } = usePassenger()

  useEffect(() => {
    getDocumentType()
  }, [])
  const initialValues = {
    passenger_number: 2,
    vehicle_number: '',

    main_contact: {
      first_name: 'kid',
      last_name: 'gonc',
      email: 'kid@gm.com',
      phone: '',
      mobile: '599 38 18'
    } as BookingMainContact
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        handleMainContact(values.main_contact)
        nextStep()
      }}
      validationSchema={step1Validation}
    >
      {({ isValid }) => (
        <Form>
          <SearchTravel />
          <SetTickets />
          <ReservationOwner />
          <Grid container spacing={4} justify="flex-end">
            <Grid item xs={12} sm={6} md={2}>
              <Button
                variant="contained"
                color="primary"
                endIcon={isValid ? <NextIcon /> : <StopIcon />}
                fullWidth
                type="submit"
              >
                Proximo
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default Step1
