/* eslint-disable multiline-ternary */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  InputAdornment,
  Typography
} from '@material-ui/core'
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
import { MailIcon, MobileIcon, PhoneIcon, UsersIcon } from '~/components/Icons'
import Layout from '~/components/Layout'
import { mainContactValidation } from '~/validations/mainContactValidation'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const initialValues = {
  main_contact: {
    first_name: ''
  }
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
              {/* resevation owner start */}
              <FormikStep
                label="Dados de Reserva"
                validationSchema={mainContactValidation}
              >
                <SearchTravel />
                <SetTickets />
                <Box mb={5}>
                  <Grid container spacing={4} direction="column">
                    <Grid item xs={12}>
                      <Box mt={2}>
                        <Grid item>
                          <Typography variant="h6">
                            Titular da Reserva
                          </Typography>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item container spacing={4}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          variant="outlined"
                          label="Nome*"
                          name="main_contact.first_name"
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
                          name="main_contact.last_name"
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
                    <Grid item container spacing={4}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          variant="outlined"
                          label="E-mail*"
                          name="main_contact.email"
                          size="small"
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          variant="outlined"
                          label=" Contato*"
                          name="main_contact.mobile"
                          size="small"
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MobileIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                {/* resevation owner end */}
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
