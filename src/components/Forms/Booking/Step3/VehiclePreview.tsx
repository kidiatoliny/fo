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
  Switch
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { EditIcon, VehicleIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useModal } from '~/hooks/useModal'
import { useTravel } from '~/hooks/useTravel'
import { BookingVehicle } from '~/store/ducks/bookings/types'
import { Form, Formik } from 'formik'
import React from 'react'

import VehicleData from '../Step2/VehicleData'

const VehiclePreview: React.FC = () => {
  const { vehicles, vehicle, getVehicleById, updateVehicles } = useBooking()
  const { getVehicleFareById, getVehicleFareAmountPerTravel } = useTravel()
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

  const { open, closeModal, openModal } = useModal()
  const [viewVehicle, setViewVehicle] = React.useState(true)
  const handleOpenModal = (id: string | undefined) => {
    openModal()
    id && getVehicleById(id)
  }

  return (
    <Box mb={5}>
      <Grid container spacing={4} direction="column">
        <Box>
          <Grid item container>
            <Typography variant="h6">Veículos</Typography>
            <Switch
              checked={viewVehicle}
              onChange={() => setViewVehicle(prev => !prev)}
            />
          </Grid>
        </Box>
        {viewVehicle && (
          <Box>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>TIPO</StyledTableCell>
                    <StyledTableCell align="left">
                      MARCA - MODELO
                    </StyledTableCell>
                    <StyledTableCell align="left">MATRICULA</StyledTableCell>
                    <StyledTableCell align="left">VALOR</StyledTableCell>
                    <StyledTableCell align="left">Ações</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {vehicles.map(vehicle => (
                    <StyledTableRow key={vehicle.id}>
                      <StyledTableCell component="th" scope="row">
                        {getVehicleFareById(vehicle.fare_id)?.fare_description}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {vehicle?.brand} - {vehicle?.model}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {vehicle.register_id}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {getVehicleFareAmountPerTravel(vehicle.fare_id).amount}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item>
                            <Button
                              size="small"
                              color="primary"
                              variant="outlined"
                              startIcon={<EditIcon />}
                              onClick={() => handleOpenModal(vehicle.id)}
                            >
                              Editar
                            </Button>
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Grid>

      <SimpleDialog
        title="Editar Veículo"
        open={open}
        onClose={closeModal}
        maxWidth="md"
      >
        <DialogContent>
          <Formik
            enableReinitialize
            initialValues={
              {
                brand: vehicle.brand,
                fare_id: vehicle.fare_id,
                model: vehicle.model,
                register_id: vehicle.register_id
              } as BookingVehicle
            }
            onSubmit={(values, helpers) => {
              updateVehicles(values)
              helpers.resetForm()
              closeModal()
            }}
          >
            <Form>
              <VehicleData />
              <Grid container justify="flex-end">
                <Grid item xs={12} sm={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    endIcon={<VehicleIcon />}
                    color="primary"
                  >
                    atualizar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </DialogContent>
      </SimpleDialog>
    </Box>
  )
}

export default VehiclePreview
