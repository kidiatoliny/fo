import { Button, Grid } from '@material-ui/core'
import { NextIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { step1Validation } from '~/validations/step1Validation'
import { Form, Formik } from 'formik'
import React from 'react'

import ReservationOwner from './ReservationOwner'
import SearchTravel from './SearchTravel'
import SetTickets from './SetTickets'

const Step1: React.FC = () => {
  const { nextStep } = useBooking()
  const initialValues = {
    passenger_number: 2,
    vehicle_number: '',

    main_contact: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      mobile: ''
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => nextStep()}
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
                endIcon={<NextIcon />}
                fullWidth
                type="submit"
                disabled={!isValid}
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
