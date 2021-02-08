/* eslint-disable multiline-ternary */
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
  IconButton,
  Theme,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
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
import { DoneIcon } from '~/components/Icons'
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
  const initialValues = {
    main_contact: {
      first_name: ''
    },
    first_name: '',
    last_name: '',
    fare_id: '',
    document_type: '',
    document_data: ''
  }

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
            <FormikStepper
              initialValues={initialValues}
              onSubmit={async values => {
                console.log('values', values)
              }}
            >
              {/* resevation owner start */}
              <FormikStep
                label="Dados de Reserva"
                // validationSchema={mainContactValidation}
              >
                <SearchTravel />
                <SetTickets />
                <ReservationOwner />
                {/* resevation owner end */}
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
            </FormikStepper>
          </CardContent>
        </Box>
      </Card>
    </Layout>
  )
}

export default Reservation
