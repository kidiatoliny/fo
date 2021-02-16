import { Box, Button, Grid, Typography } from '@material-ui/core'
import { StopIcon, VehicleIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { BookingVehicle } from '~/store/ducks/bookings/types'
import { vehicleValidation } from '~/validations/vehicleValidation'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

import VehicleData from './VehicleData'
const VehicleForm: React.FC = () => {
  const { vehicleCount, handleAddVehicle, vehicle } = useBooking()

  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(vehicleCount)
  }, [])

  const initialValues = {
    brand: '',
    fare_id: vehicle.fare_id,
    model: '',
    register_id: ''
  } as BookingVehicle
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={vehicleValidation}
      onSubmit={(values, helpers) => {
        handleAddVehicle(values)
        helpers.resetForm()
      }}
    >
      {({ isValid }) => (
        <Form>
          <Box marginBottom={4}>
            <Grid container spacing={4} direction="column">
              <Grid item xs={12}>
                <Box mt={2}>
                  <Grid item>
                    <Typography variant="h6">
                      Veículo {total - vehicleCount + 1}-{total}
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
              <VehicleData />
              <Grid item container justify="flex-end">
                <Grid item xs={12} md={6} lg={3}>
                  <Box mt={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      endIcon={isValid ? <VehicleIcon /> : <StopIcon />}
                      type="submit"
                    >
                      Adicionar Veiculo
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default VehicleForm
