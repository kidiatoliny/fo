/* eslint-disable multiline-ternary */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Icon,
  Typography
} from '@material-ui/core'
import ReservationOwner from '~/src/components/Forms/Booking/ReservationOwner'
import SearchTravel from '~/src/components/Forms/Booking/SearchTravel'
import SetTickets from '~/src/components/Forms/Booking/SetTickets'
import { FormikStep } from '~/src/components/Forms/Formik/FormikStep'
import { FormikStepper } from '~/src/components/Forms/Formik/FormikStepper'
import Layout from '~/src/components/Layout'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const initialValues = {
  firstName: ''
}
const Reservation: React.FC = () => {
  return (
    <Layout>
      <Card raised>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <Icon>
                <AiOutlineShoppingCart />
              </Icon>
            </Avatar>
          }
          title={<Typography variant="h5">Reserva / Venda</Typography>}
        />
        <Box padding={5}>
          <CardContent>
            <FormikStepper
              initialValues={initialValues}
              onSubmit={async values => {
                console.log('values', values)
              }}
            >
              <FormikStep label="Dados de Reserva">
                <SearchTravel />
                <SetTickets />
                <ReservationOwner />
              </FormikStep>
            </FormikStepper>
          </CardContent>
        </Box>
      </Card>
    </Layout>
  )
}

export default Reservation
