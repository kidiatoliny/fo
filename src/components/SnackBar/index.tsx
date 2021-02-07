import {
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  SnackbarProps
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

interface SnackBarProps {
  open: boolean
  onClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string | undefined
  ) => void
  message: string
}

type CustomSnackBar = SnackbarProps & SnackBarProps
const SnackBar: React.FC<CustomSnackBar> = ({
  open,
  onClose,
  message,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
  ...restProps
}) => {
  return (
    <Snackbar
      {...restProps}
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  )
}

export default SnackBar
