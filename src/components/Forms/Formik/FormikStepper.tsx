/* eslint-disable indent */
import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  MobileStepper,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  withStyles,
  Box,
  Typography
} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import VideoLabelIcon from '@material-ui/icons/VideoLabel'
import { useBooking } from '~/contexts/BookingProvider'
import clsx from 'clsx'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'
import React, { useState } from 'react'

import { FormikStepProps } from './FormikStep'
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(StepConnector)

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,15) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  }
})
function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <CalendarTodayIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <LocalAtmIcon />
  }
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}
export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const { step, nextStep, backStep, isLastStep } = useBooking()
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[]
  const currentChild = childrenArray[step]
  const [completed, setCompleted] = useState(false)

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep(childrenArray.length - 1)) {
          await props.onSubmit(values, helpers)
          setCompleted(true)
        } else {
          nextStep()
          helpers.setTouched({})
        }
      }}
    >
      {({ isSubmitting, isValid, values }) => (
        <Form autoComplete="off">
          <Hidden mdUp>
            <MobileStepper
              variant="dots"
              steps={6}
              position="bottom"
              activeStep={step}
              nextButton={
                <Button
                  size="small"
                  onClick={() => nextStep()}
                  disabled={step === 5}
                >
                  Proximo
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                step > 0 && (
                  <Button size="small" onClick={() => backStep()}>
                    <KeyboardArrowLeft />
                    Voltar
                  </Button>
                )
              }
            />
          </Hidden>
          <Hidden mdDown>
            <Stepper
              alternativeLabel
              connector={<ColorlibConnector />}
              activeStep={step}
            >
              {childrenArray.map((child, index) => (
                <Step
                  key={child.props.label}
                  completed={step > index || completed}
                >
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {child.props.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Hidden>
          {currentChild}
          <Box m={1} mb={3}>
            <Typography variant="body2" color="primary">
              * Campos Obrigatórios
            </Typography>
          </Box>
          <Hidden mdDown>
            <Grid container justify="space-between">
              {step === 0 ||
                (step < 2 && (
                  <Grid item sm={6} md={2}>
                    <Button
                      disabled={isSubmitting}
                      variant="outlined"
                      color="primary"
                      onClick={() => backStep()}
                      fullWidth
                    >
                      Voltar
                    </Button>
                  </Grid>
                ))}
              <Grid item />

              <Grid item sm={6} md={2}>
                {step < 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    disabled={!isValid}
                  >
                    Proximo
                  </Button>
                )}
              </Grid>
            </Grid>
          </Hidden>
        </Form>
      )}
    </Formik>
  )
}
