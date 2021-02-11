import {
  Box,
  Typography,
  Grid,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Button,
  withStyles,
  Theme,
  createStyles,
  DialogContent,
  DialogContentText,
  DialogActions,
  Switch,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { AddUserIcon, EditIcon, UsersIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useFormatDate } from '~/hooks/useFormatDate'
import { useLocations } from '~/hooks/useLocations'
import { useModal } from '~/hooks/useModal'
import { usePassenger } from '~/hooks/usePassenger'
import { useTravel } from '~/hooks/useTravel'
import { BookingPassenger } from '~/store/ducks/bookings/types'
import { Passenger } from '~/store/ducks/passengers/types'
import { Field, Form, Formik } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useState } from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'

import PassengerData from '../Step2/PassengerData'
import PassengerForm from '../Step2/PassengerForm'

const PassengerPreview: React.FC = () => {
  const {
    passengers,
    departureId,
    departureScheduleId,
    returnScheduleId,
    destinationId,
    departureDate,
    returnDate,
    getPassengerById,
    passenger,
    updatePassengers
  } = useBooking()
  const { getLocationById } = useLocations()
  const { open, closeModal, openModal } = useModal()
  const {
    departureSchedulesById,
    returnSchedulesById,
    getPassengerFareAmountPerTravel,
    passengerFares
  } = useTravel()
  const { displayDate } = useFormatDate()
  const { documentTypes } = usePassenger()
  const [openPassengerModal, setOpenPassagerModal] = React.useState(false)
  const [viewPassenger, setViewPassenger] = React.useState(true)
  const departureLocation = getLocationById(parseInt(departureId))
  const returnLocation = getLocationById(parseInt(destinationId))
  // const [passenger, setPassenger] = useState({} as BookingPassenger)

  const handleOpenModal = (id: string | undefined) => {
    openModal()
    id && getPassengerById(id)
  }

  const departureSchedule = departureSchedulesById(
    parseInt(departureScheduleId)
  )

  const returnSchedule = returnSchedulesById(parseInt(returnScheduleId))
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.common.white
      },
      body: {
        fontSize: 14
      }
    })
  )(TableCell)

  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover
        }
      }
    })
  )(TableRow)

  return (
    <Box mb={5}>
      <Grid container spacing={4} direction="column">
        <Box>
          <Grid item container>
            <Typography variant="h6">Passageiros</Typography>
            <Switch
              checked={viewPassenger}
              onChange={() => setViewPassenger(prev => !prev)}
            />
          </Grid>
        </Box>
        {viewPassenger && (
          <Box>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>NOME</StyledTableCell>
                    <StyledTableCell>ROTA</StyledTableCell>
                    <StyledTableCell align="left">
                      PARTIDA {returnDate && '- RETORNO'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      HORA PARTIDA {returnScheduleId && '- RETORNO'}
                    </StyledTableCell>
                    <StyledTableCell align="left">VALOR</StyledTableCell>
                    <StyledTableCell align="left">Ações</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {passengers.map((passenger, index) => (
                    <>
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {passenger.first_name} {passenger.last_name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {departureLocation?.name_2}-{returnLocation?.name_2}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {displayDate(departureDate)}
                          {returnDate && ` - ${displayDate(returnDate)}`}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {departureSchedule?.departure_time}
                          {returnSchedule &&
                            `- ${returnSchedule?.departure_time}`}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {
                            getPassengerFareAmountPerTravel(passenger.fare_id)
                              .amount
                          }
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                              <Button
                                size="small"
                                color="primary"
                                variant="outlined"
                                startIcon={<EditIcon />}
                                onClick={() => handleOpenModal(passenger.id)}
                              >
                                Editar
                              </Button>
                            </Grid>
                          </Grid>
                        </StyledTableCell>
                      </StyledTableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        <SimpleDialog
          title={`Editar Passageiro ${passenger.first_name}`}
          open={open}
          onClose={closeModal}
          maxWidth="md"
        >
          <DialogContent>
            <Formik
              enableReinitialize
              initialValues={
                {
                  first_name: passenger.first_name,
                  last_name: passenger.last_name,
                  fare_id: passenger.fare_id,
                  document_type: passenger.document_type,
                  document_data: passenger.document_data
                } as BookingPassenger
              }
              onSubmit={(values, helpers) => {
                updatePassengers(values)
                helpers.resetForm()
                closeModal()
              }}
            >
              <Form>
                <PassengerData />
                <Grid container justify="flex-end">
                  <Grid item xs={12} sm={3}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      endIcon={<AddUserIcon />}
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
            {/* <PassengerData update passenger={passenger} /> */}
          </DialogContent>
          {/* <DialogActions>
            <Button
              onClick={() => setOpenPassagerModal(false)}
              color="primary"
              variant="outlined"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => setOpenPassagerModal(false)}
              color="primary"
              variant="contained"
            >
              Guardar
            </Button>
          </DialogActions> */}
        </SimpleDialog>
      </Grid>
    </Box>
  )
}

export default PassengerPreview
