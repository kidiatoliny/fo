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
import Step3 from '~/components/Forms/Booking/Step3'
import Step4 from '~/components/Forms/Booking/Step4'
import Layout from '~/components/Layout'
import Loading from '~/components/Loading'
import { useLocations } from '~/hooks/useLocations'
import React, { useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Reservation: React.FC = () => {
  const { getLocations, isLoading } = useLocations()
  useEffect(() => {
    getLocations()
  }, [])
  if (isLoading) {
    return <Loading />
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
                <Step1 />
              </BookingStep>
              <BookingStep label="Dados de Viagem">
                <Step2 />
              </BookingStep>
              <BookingStep label="Pre-Visualização">
                <Step3 />
              </BookingStep>
              <BookingStep label="Pagamento">
                <Step4 />
              </BookingStep>
            </BookingStepper>
          </CardContent>
        </Box>
      </Card>
    </Layout>
  )
}

export default Reservation
