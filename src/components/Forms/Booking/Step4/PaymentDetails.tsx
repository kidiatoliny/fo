/* eslint-disable @typescript-eslint/no-explicit-any */
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
  FormControl,
  LinearProgress,
  Divider
} from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import done from '~/assets/done.svg'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import {
  MoneyIcon,
  PaymentIcon,
  PrinterPosIcon,
  ShoppingIcon
} from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useModal } from '~/hooks/useModal'
import { usePayment } from '~/hooks/usePayment'
import { usePrint } from '~/hooks/usePrint'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: theme.spacing(40),
      height: 'auto'
    }
  })
)
const PaymentDetails: React.FC = () => {
  const classes = useStyles()
  const { isLoading, paymentData } = usePayment()

  const {
    printPdf,
    printTicketRequest,
    printPosRequest,
    isLoading: loadingPrintInfo
  } = usePrint()
  const { open, openModal, closeModal } = useModal()
  const {
    isFaturation,
    invoice,
    bookedTicket,
    paymentMethod,
    handlePaymentRequest,

    clearBooking
  } = useBooking()
  const [dislabedPaymentButton, setDisablePaymentButton] = useState(false)
  useEffect(() => {
    if (paymentData.booking_id) {
      printTicketRequest({ booking_id: paymentData.booking_id, output: 'show' })
      printPosRequest({ booking_id: paymentData.booking_id, output: 'show' })
      openModal()
    }
  }, [paymentData])
  const [change, setChange] = useState(0)
  const newSale = () => {
    closeModal()
    clearBooking()
  }
  useEffect(() => {
    if (isFaturation && !dislabedPaymentButton && invoice) {
      setDisablePaymentButton(true)
    } else {
      setDisablePaymentButton(false)
    }
  }, [isFaturation])
  const handlePayment = async () => {
    handlePaymentRequest()
  }
  const handlePaymentChange = (value: string) => {
    const money = parseInt(value)

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
        title=""
        onClose={closeModal}
        disableBackdropClick
      >
        <DialogContent>
          <DialogContentText id="reservation">
            {bookedTicket.id && (
              <>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <Typography>BNVASV#{bookedTicket.id}</Typography>
                  </Grid>
                  <Grid item container justify="flex-end" xs={12}>
                    <Button
                      onClick={() => newSale()}
                      color="primary"
                      variant="contained"
                      startIcon={<ShoppingIcon />}
                    >
                      Nova Venda
                    </Button>
                  </Grid>
                  <Grid item>
                    <Box m={2}>
                      <img src={done} alt="done" className={classes.img} />
                    </Box>
                  </Grid>
                </Grid>
              </>
            )}
          </DialogContentText>
          <Divider />
        </DialogContent>

        {loadingPrintInfo ? (
          <LinearProgress />
        ) : (
          <DialogActions>
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <Button
                  onClick={() => printPdf('ticket')}
                  variant="outlined"
                  color="primary"
                  startIcon={<PrinterPosIcon />}
                >
                  Imprimir
                </Button>
              </Grid>

              <Grid item>
                <Button
                  onClick={() => printPdf('pos')}
                  variant="outlined"
                  startIcon={<PrinterPosIcon />}
                  fullWidth
                >
                  imprimir POS
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        )}
      </SimpleDialog>
    </Card>
  )
}

export default PaymentDetails
