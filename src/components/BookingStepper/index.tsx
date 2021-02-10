import {
  Box,
  makeStyles,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  withStyles
} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import VideoLabelIcon from '@material-ui/icons/VideoLabel'
import { useBooking } from '~/contexts/BookingProvider'
import clsx from 'clsx'
import React from 'react'

import { BookingStepProps } from './BookingStep'
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

const BookingStepper: React.FC = ({ children, ...props }) => {
  const { step } = useBooking()
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<BookingStepProps>[]
  const currentChild = childrenArray[step]
  return (
    <Box {...props}>
      <Stepper
        alternativeLabel
        connector={<ColorlibConnector />}
        activeStep={step}
      >
        {childrenArray.map((child, index) => (
          <Step key={child.props.label} completed={step > index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {child.props.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentChild}
    </Box>
  )
}

export default BookingStepper
