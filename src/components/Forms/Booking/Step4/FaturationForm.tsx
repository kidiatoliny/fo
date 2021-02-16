import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Switch,
  Typography
} from '@material-ui/core'
import {
  DoneIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  StopIcon,
  UsersIcon
} from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { BillingUser } from '~/store/ducks/payments/types'
import { invoiceValidation } from '~/validations/invoiceValidation'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'

const FaturationForm: React.FC = () => {
  const {
    isFaturation,
    setIsFaturation,
    handleInvoiceData,
    invoice
  } = useBooking()
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item container>
              <Typography variant="h6">Dados de Faturacao</Typography>
              <Switch
                checked={isFaturation}
                onChange={() => setIsFaturation(prev => !prev)}
              />
            </Grid>
          </Box>
        </Grid>
        {isFaturation && (
          <Box m={2}>
            <Formik
              initialValues={
                {
                  name: invoice.name,
                  vat_number: invoice.vat_number,
                  address: invoice.address,
                  email: invoice.email,
                  phone_number: invoice.phone_number
                } as BillingUser
              }
              validationSchema={invoiceValidation}
              onSubmit={values => {
                handleInvoiceData(values)
                setIsFaturation(prev => !prev)
              }}
            >
              {({ isValid }) => (
                <Form>
                  <Grid item container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        label=" Nome Completo"
                        name="name"
                        size="small"
                        placehoder={invoice.name}
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
                        label=" N.I.F"
                        name="vat_number"
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
                        label="E-mail"
                        name="email"
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
                        label="Contato"
                        name="phone_number"
                        size="small"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon />
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
                        label="Morada"
                        name="address"
                        size="small"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container justify="flex-end">
                    <Grid item xs={12} md={6} lg={3}>
                      <Box mt={4}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          endIcon={isValid ? <DoneIcon /> : <StopIcon />}
                          type="submit"
                        >
                          Confirmar
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        )}
      </Grid>
    </Box>
  )
}

export default FaturationForm
