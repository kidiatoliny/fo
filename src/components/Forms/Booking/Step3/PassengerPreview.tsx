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
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { EditIcon, UsersIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useFormatDate } from '~/hooks/useFormatDate'
import { useLocations } from '~/hooks/useLocations'
import { usePassenger } from '~/hooks/usePassenger'
import { useTravel } from '~/hooks/useTravel'
import { BookingPassenger } from '~/store/ducks/bookings/types'
import { Passenger } from '~/store/ducks/passengers/types'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import React, { useCallback, useState } from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'

const PassengerPreview: React.FC = () => {
  const {
    passengers,
    departureId,
    departureScheduleId,
    returnScheduleId,
    destinationId,
    departureDate,
    returnDate,
    updatePassengers
  } = useBooking()
  const { getLocationById } = useLocations()
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
  const [passenger, setPassenger] = useState({} as BookingPassenger)
  const handleChange = useCallback(
    (value: string, name: string) => {
      setPassenger({
        ...passenger,
        [name]: value
      } as BookingPassenger)
    },

    [passenger]
  )
  const openModal = (payload: BookingPassenger) => {
    setOpenPassagerModal(true)
    setPassenger(payload)
  }

  const departureSchedule = departureSchedulesById(
    parseInt(departureScheduleId)
  )
  console.log(passengers)
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
                                onClick={() => openModal(passenger)}
                              >
                                Editar
                              </Button>
                            </Grid>
                          </Grid>
                        </StyledTableCell>
                      </StyledTableRow>
                      {/* passenger dialog */}
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Grid>
      <SimpleDialog
        title={`Editar Passageiro  - ${passenger.id}`}
        open={openPassengerModal}
        onClose={() => setOpenPassagerModal(false)}
      >
        <DialogContent>
          {JSON.stringify(passenger)}
          <Grid container spacing={4} direction="column">
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Nome"
                  name="first_name"
                  size="small"
                  helperText={passenger.first_name}
                  fullWidth
                  defaultValue={passenger.first_name}
                  onBlur={(event: React.FormEvent<HTMLInputElement>) =>
                    handleChange(event.currentTarget.value, 'first_name')
                  }
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
                  required
                  variant="outlined"
                  label=" Apelido"
                  name="last_name"
                  size="small"
                  fullWidth
                  onBlur={(event: React.FormEvent<HTMLInputElement>) =>
                    handleChange(
                      event.currentTarget.value,
                      event.currentTarget.name
                    )
                  }
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
          </Grid>
          <Box>
            <Box marginTop={3}>
              <Grid container spacing={4}>
                <Grid item sm={6}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel htmlFor="fare_id">
                      Tipo de Passageiro
                    </InputLabel>
                    <Field
                      component={Select}
                      label=" Tipo de Passageiro"
                      name="fare_id"
                      inputProps={{
                        id: 'fare_id'
                      }}
                      displayEmpty
                      onChange={(
                        event: React.ChangeEvent<{
                          value: string
                        }>
                      ) => handleChange(event.target.value, 'fare_id')}
                      value={'' || passenger.fare_id}
                      startAdornment={
                        <InputAdornment position="start">
                          <AiOutlineUserAdd />
                        </InputAdornment>
                      }
                    >
                      {passengerFares?.map(fare => (
                        <MenuItem value={fare.id} key={fare.id}>
                          {fare.fare_description}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item sm={6}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel htmlFor="document_type">
                      Tipo documento
                    </InputLabel>
                    <Field
                      component={Select}
                      label="Tipo de documento"
                      name="document_type"
                      displayEmpty
                      onChange={(
                        event: React.ChangeEvent<{
                          value: string
                        }>
                      ) => handleChange(event.target.value, 'fare_id')}
                      value={'' || passenger.document_type}
                      inputProps={{
                        id: 'document_type'
                      }}
                      disabled={!passenger.fare_id}
                      startAdornment={
                        <InputAdornment position="start">
                          <AiOutlineFileSearch />
                        </InputAdornment>
                      }
                    >
                      {documentTypes.map(document => (
                        <MenuItem value={document.id} key={document.id}>
                          {document.name}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    disabled={!passenger.document_type}
                    label=" Numero de documento"
                    name="document_data"
                    size="small"
                    fullWidth
                    onBlur={(event: React.FormEvent<HTMLInputElement>) =>
                      handleChange(
                        event.currentTarget.value,
                        event.currentTarget.name
                      )
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HiOutlineHashtag />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenPassagerModal(false)}
            color="primary"
            variant="outlined"
            type="reset"
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
        </DialogActions>
      </SimpleDialog>
    </Box>
  )
}

export default PassengerPreview
