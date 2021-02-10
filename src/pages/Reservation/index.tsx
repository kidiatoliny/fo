/* eslint-disable multiline-ternary */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Icon,
  Theme,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import BookingStepper from '~/components/BookingStepper'
import BookingStep from '~/components/BookingStepper/BookingStep'
import Step1 from '~/components/Forms/Booking/Step1'
import PassengerData from '~/components/Forms/Booking/Step2/PassengerData'
import Layout from '~/components/Layout'
import Loading from '~/components/Loading'
import { useBooking } from '~/contexts/BookingProvider'
import { useLocations } from '~/hooks/useLocations'
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white
    }
  })
)
const Reservation: React.FC = () => {
  const classes = useStyles()
  const { getLocations, isLoading } = useLocations()
  const { passengerCount, vehicleCount, setStep } = useBooking()
  const [open, setOpen] = useState(false)

  isLoading && <Loading />
  useEffect(() => {
    getLocations()
  }, [])
  useEffect(() => {
    setOpen(false)
    if (passengerCount === 0 && vehicleCount === 0) {
      setOpen(true)
    }
  }, [passengerCount, vehicleCount, setOpen])
  const handleClose = () => {
    setOpen(false)
    setStep(2)
  }
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
                {/* <SearchTravel /> */}
                {/* <ReservationOwner /> */}
                <Step1 />
              </BookingStep>
              <BookingStep label="Dados de Viagem">
                {passengerCount > 0 && <PassengerData />}
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
