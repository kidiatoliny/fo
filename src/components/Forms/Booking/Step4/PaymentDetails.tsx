import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
  InputAdornment,
  Typography,
  CircularProgress,
  TextField,
  FormControl
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import {
  MailIcon,
  MobileIcon,
  MoneyIcon,
  PaymentIcon,
  PhoneIcon,
  UserIcon
} from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useModal } from '~/hooks/useModal'
import React, { useEffect, useState } from 'react'
const PaymentDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { open, openModal, closeModal } = useModal()
  const { isFaturation, invoice, bookedTicket, paymentMethod } = useBooking()

  const [dislabedPaymentButton, setDisablePaymentButton] = useState(false)

  const [change, setChange] = useState(0)
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (isFaturation && !dislabedPaymentButton && invoice) {
      setDisablePaymentButton(true)
    } else {
      setDisablePaymentButton(false)
    }
  }, [isFaturation])

  const sleep = (time: number) =>
    new Promise(resolve => setTimeout(resolve, time))

  const handlePayment = async () => {
    setIsLoading(true)
    await sleep(2000)
    openModal()
    setIsLoading(false)
  }
  const handlePaymentChange = (value: string) => {
    const money = parseInt(value)
    setValue(money)

    if (isNaN(money)) {
      return setChange(0)
    }
    const change =
      money - Math.ceil(parseInt(bookedTicket.payment_data.total_booking))
    setChange(change)
  }
  return (
    <Card style={{ width: '100%', marginBottom: '2rem' }} raised>
      <Box p={2}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <Icon>
                <PaymentIcon />
              </Icon>
            </Avatar>
          }
          title={<Typography variant="h6">Detalhes de pagamento</Typography>}
        />
        <CardContent>
          {bookedTicket.id && (
            <Box p={2}>
              <Grid container spacing={6} justify="center">
                <Grid item md={3}>
                  <Typography variant="body1">Sub Total</Typography>
                  <Typography variant="body2">
                    <b>
                      {Math.ceil(
                        parseInt(bookedTicket.payment_data.ticket_amount)
                      )}
                      $00
                    </b>
                  </Typography>
                </Grid>
                <Grid item md={3}>
                  <Typography variant="body1">Taxas</Typography>
                  <Typography variant="body2">
                    <b>
                      {Math.ceil(
                        parseInt(bookedTicket.payment_data.ticket_tax_amount)
                      )}
                      $00
                    </b>
                  </Typography>
                </Grid>

                <Grid item md={3}>
                  <Typography variant="body1">Total</Typography>
                  <Typography variant="h6">
                    <b>
                      {Math.ceil(
                        parseInt(bookedTicket.payment_data.total_booking)
                      )}
                      $00
                    </b>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
          <Box mt={1} mb={5}>
            {/* <Divider /> */}
          </Box>
          {parseInt(paymentMethod) === 1 && (
            <Grid container alignItems="center" spacing={4} justify="center">
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <TextField
                    variant="outlined"
                    label="VALOR RECEBIDO"
                    onChange={(event: any) =>
                      handlePaymentChange(event.target.value as string)
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <TextField
                    variant="outlined"
                    label="TROCO"
                    value={change}
                    error={change < 0}
                    helperText={change < 0 && 'O troco não pode ser negativo'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MoneyIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          )}

          <CardActions>
            <Grid container justify="flex-end">
              <Box mt={4}>
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={dislabedPaymentButton || paymentMethod === ''}
                    startIcon={
                      isLoading ? (
                        <CircularProgress size="1rem" color="inherit" />
                      ) : (
                        <PaymentIcon />
                      )
                    }
                    onClick={handlePayment}
                  >
                    {isLoading ? 'Processando...' : 'Processar Pagamento'}
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </CardActions>
        </CardContent>
      </Box>
      <SimpleDialog
        open={open}
        title="Pagamento Processado com Sucesso"
        onClose={closeModal}
      >
        <DialogContent>
          <DialogContentText id="reservation">
            <Typography variant="h6" style={{ marginBottom: '1rem' }}>
              <b> Codigo de Bilhete</b> - <i> #uy32789j</i>
            </Typography>

            <Box>
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                <b>Titular da Reserva</b>
              </Typography>
              <Grid container spacing={1} md={10}>
                <Grid item container alignItems="center" md={6}>
                  <Icon>
                    <UserIcon />
                  </Icon>
                  <Typography style={{ marginLeft: '1rem' }}>
                    Jhon Doe
                  </Typography>
                </Grid>
                <Grid item container style={{ marginTop: 4 }} md={6}>
                  <Icon>
                    <MailIcon />
                  </Icon>
                  <Typography style={{ marginLeft: '1rem' }}>
                    example@example.com
                  </Typography>
                </Grid>
                <Grid item container style={{ marginTop: 4 }} md={6}>
                  <Icon>
                    <MobileIcon />
                  </Icon>
                  <Typography style={{ marginLeft: '1rem' }}>
                    999 99 99
                  </Typography>
                </Grid>
                <Grid item container style={{ marginTop: 4 }} md={6}>
                  <Icon>
                    <PhoneIcon />
                  </Icon>
                  <Typography style={{ marginLeft: '1rem' }}>
                    999 99 99
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </SimpleDialog>
    </Card>
  )
}

export default PaymentDetails
