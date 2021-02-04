import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import logo from '~/assets/logo.png'
import { LockIcon, LoginIcon, UserIcon } from '~/components/Icons'
import { useAuth } from '~/contexts/AuthProvider'
import { LoginValidation } from '~/validations/LoginValidation'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

interface State {
  password: string

  showPassword: boolean
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { minHeight: '100vh' },
    large: {
      width: theme.spacing(24),
      height: 'auto'
    },
    boxImg: {
      margin: theme.spacing(10)
    },
    card: {
      width: theme.spacing(50)
    }
  })
)

const Login: React.FC = () => {
  const classes = useStyles()
  const { login, error, isLoading, token, isTokenExpired } = useAuth()

  const history = useHistory()
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false
  })

  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (error?.code === 401) {
      !open && setOpen(true)
    }
  }, [error])
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  if (token && !isTokenExpired) {
    return <Redirect to="/dashboard" />
  }
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Card raised className={classes.card}>
        <Grid item container alignItems="center" justify="center">
          <Box className={classes.boxImg}>
            <img src={logo} alt="avatar" className={classes.large} />
          </Box>
        </Grid>
        <CardContent>
          <Formik
            validationSchema={LoginValidation}
            initialValues={{ username: '', password: '' }}
            onSubmit={async values => {
              login(values)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid item>
                  <Grid item sm={12}>
                    <Box mt={2}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        label=" NOME DE UTILIZADOR"
                        name="username"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <UserIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={12}>
                    <Box mt={4}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        label=" PASSWORD"
                        name="password"
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={12}>
                    <Box mt={4}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        size="large"
                        type="submit"
                        aria-label="large"
                        endIcon={<LoginIcon />}
                      >
                        Login
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Crendências Invalidas"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Grid>
  )
}
export default Login
