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
  Divider,
  Grid,
  Icon,
  InputAdornment,
  Typography,
  CircularProgress
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import {
  MailIcon,
  MobileIcon,
  PaymentIcon,
  PhoneIcon,
  UserIcon
} from '~/components/Icons'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React, { useState } from 'react'
const PaymentDetails: React.FC = () => {
  const [paymemtModal, setPaymentModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sleep = (time: number) =>
    new Promise(resolve => setTimeout(resolve, time))

  const handlePayment = async () => {
    setIsLoading(true)
    await sleep(2000)
    setPaymentModal(true)
    setIsLoading(false)
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
          <Box p={2}>
            <Grid container spacing={6} wrap="wrap">
              <Grid item md={3}>
                <Typography variant="body1">Passageiros</Typography>
                <Typography variant="body2">
                  <b>800$00</b>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="body1">Veiculos</Typography>
                <Typography variant="body2">
                  <b>800$00</b>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="body1">Taxas</Typography>
                <Typography variant="body2">
                  <b>800$00</b>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="body1">Total</Typography>
                <Typography variant="h6">
                  <b>800$00</b>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={1} mb={5}>
            <Divider />
          </Box>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} sm={6}>
              <Field
                component={TextField}
                variant="outlined"
                label="VALOR RECEBIDO"
                name="last_name"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaymentIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">TROCO</Typography>
              <Typography variant="h6">
                <b>800$00</b>
              </Typography>
            </Grid>
          </Grid>

          <CardActions>
            <Grid container justify="flex-end">
              <Box mt={4}>
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
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
        title="Pagamento Processado com Sucesso"
        open={paymemtModal}
        onClose={() => setPaymentModal(false)}
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
          <Button
            onClick={() => setPaymentModal(false)}
            color="primary"
            variant="contained"
          >
            OK
          </Button>
        </DialogActions>
      </SimpleDialog>
    </Card>
  )
}

export default PaymentDetails
