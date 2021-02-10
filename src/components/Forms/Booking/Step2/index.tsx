import {
  Button,
  createStyles,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Theme
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { DoneIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import React, { useEffect, useState } from 'react'

import PassengerData from './PassengerData'
import VehicleData from './VehicleData'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white
    }
  })
)
const Step2: React.FC = () => {
  const classes = useStyles()
  const { passengerCount, vehicleCount, setStep } = useBooking()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
    setStep(2)
  }
  useEffect(() => {
    setOpen(false)
    if (passengerCount === 0 && vehicleCount === 0) {
      setOpen(true)
    }
  }, [passengerCount, vehicleCount, setOpen])
  return (
    <>
      {passengerCount > 0 && <PassengerData />}
      {vehicleCount > 0 && passengerCount === 0 && <VehicleData />}
      <SimpleDialog open={open} onClose={() => setOpen(false)} title="">
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={4} alignItems="center" justify="center">
              <Grid item xs={2}>
                <IconButton className={classes.iconButton}>
                  <Icon>
                    <DoneIcon />
                  </Icon>
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                Dados Adicionados adicionados com successo
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </SimpleDialog>
    </>
  )
}

export default Step2
