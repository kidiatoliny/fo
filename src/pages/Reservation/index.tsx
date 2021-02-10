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
import BookingStepper from '~/components/BookingStepper'
import BookingStep from '~/components/BookingStepper/BookingStep'
import Step1 from '~/components/Forms/Booking/Step1'
import Step2 from '~/components/Forms/Booking/Step2'
import Layout from '~/components/Layout'
import Loading from '~/components/Loading'
import { useLocations } from '~/hooks/useLocations'
import React, { useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Reservation: React.FC = () => {
  const { getLocations, isLoading } = useLocations()

  isLoading && <Loading />
  useEffect(() => {
    getLocations()
  }, [])

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
            <BookingStepper>
              <BookingStep label="Dados de Reserva">
                <Step1 />
              </BookingStep>
              <BookingStep label="Dados de Viagem">
                <Step2 />
              </BookingStep>
            </BookingStepper>
            {/* <FormikStepper
              initialValues={initialValues}
              onSubmit={async values => {
                console.log('values', values)
              }}
            >

              <FormikStep
                label="Dados de Reserva"

              >
                <SearchTravel />
                <SetTickets />
                <ReservationOwner />

              </FormikStep>
              <FormikStep label="Dados de Passageiro">
                {passengerCount > 0 && <PassengerData />}
                {vehicleCount > 0 && passengerCount === 0 && <VehicleData />}
                <SimpleDialog
                  open={open}
                  onClose={() => setOpen(false)}
                  title=""
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justify="center"
                      >
                        <Grid item xs={2}>
                          <IconButton className={classes.iconButton}>
                            <Icon>
                              <DoneIcon />
                            </Icon>
                          </IconButton>
                        </Grid>
                        <Grid item xs={8}>
                          Os dados de passageiros foram adicionados com successo
                        </Grid>
                      </Grid>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      color="primary"
                      variant="contained"
                    >
                      OK
                    </Button>
                  </DialogActions>
                </SimpleDialog>
              </FormikStep>
              <FormikStep label="Pre-Visualização">
                <ReservationOwnerPreview />
                <PassengerPreview />
                <VehiclePreview />
              </FormikStep>
              <FormikStep label="Pagamento">
                <PaymentMethods />
              </FormikStep>
            </FormikStepper> */}
          </CardContent>
        </Box>
      </Card>
    </Layout>
  )
}

export default Reservation
