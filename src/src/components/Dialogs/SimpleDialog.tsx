import { Dialog, DialogTitle, Slide } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React from 'react'

interface SimpleDialogProps {
  open: boolean
  onClose: () => void
  title: string
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})
const SimpleDialog: React.FC<SimpleDialogProps> = ({
  open,
  onClose,
  title,
  children
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby={`${title}-dialog`}
      aria-describedby={`${title}-dialog`}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id={`${title}-dialog`}>{title}</DialogTitle>
      {children}
    </Dialog>
  )
}

export default SimpleDialog
