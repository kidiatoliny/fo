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
import ReservationOwner from '~/components/Forms/Booking/Step1/ReservationOwner'
import SearchTravel from '~/components/Forms/Booking/Step1/SearchTravel'
import SetTickets from '~/components/Forms/Booking/Step1/SetTickets'
import PassengerData from '~/components/Forms/Booking/Step2/PassengerData'
import VehicleData from '~/components/Forms/Booking/Step2/VehicleData'
import PassengerPreview from '~/components/Forms/Booking/Step3/PassengerPreview'
import ReservationOwnerPreview from '~/components/Forms/Booking/Step3/ReservationOwnerPreview'
import VehiclePreview from '~/components/Forms/Booking/Step3/Vehicle'
import PaymentMethods from '~/components/Forms/Booking/Step4/PaymentMethods'
import { FormikStep } from '~/components/Forms/Formik/FormikStep'
import { FormikStepper } from '~/components/Forms/Formik/FormikStepper'
import Layout from '~/components/Layout'
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
              <FormikStep label="Dados de Passageiro">
                <PassengerData />
                <VehicleData />
              </FormikStep>
              <FormikStep label="Pre-Visualização">
                <ReservationOwnerPreview />
                <PassengerPreview />
                <VehiclePreview />
              </FormikStep>
              <FormikStep label="Pagamento">
                <PaymentMethods />
              </FormikStep>
            </FormikStepper>
          </CardContent>
        </Box>
      </Card>
    </Layout>
  )
}

export default Reservation