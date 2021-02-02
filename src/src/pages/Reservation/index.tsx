/* eslint-disable multiline-ternary */
import {
  Button,
  Card,
  CardHeader,
  createStyles,
  makeStyles,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import VideoLabelIcon from '@material-ui/icons/VideoLabel'
import Layout from '~/src/components/Layout'
import clsx from 'clsx'
import React from 'react'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
)
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
    3: <VideoLabelIcon />
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

const Reservation: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const classes = useStyles()
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  return (
    <Layout>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        <Step>
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            Procurar Viagem
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            Dados de Viagem
          </StepLabel>
        </Step>
      </Stepper>
      <Card raised>
        {activeStep === 0 && <Typography>Step 1</Typography>}
        {activeStep === 1 && <div>step 2</div>}
        {activeStep === 2 ? (
          <div>
            <Typography className={classes.instructions}>done</Typography>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === 3 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Layout>
  )
}

export default Reservation
