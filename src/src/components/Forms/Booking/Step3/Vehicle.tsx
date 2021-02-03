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
  Switch
} from '@material-ui/core'
import SimpleDialog from '~/src/components/Dialogs/SimpleDialog'
import { EditIcon } from '~/src/components/Icons'
import React from 'react'

import PassengerData from '../Step2/PassengerData'
import VehicleData from '../Step2/VehicleData'

const VehiclePreview: React.FC = () => {
  const passengers = [
    {
      name: 'john Down',
      departure: '21/21/21',
      return: '18/18/18',
      departureTime: '17',
      returnTime: '15',
      amount: '600'
    },
    {
      name: 'jown',
      departure: '21/21/21',
      return: '18/18/18',
      departureTime: '17',
      returnTime: '15',
      amount: '600'
    }
  ]
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
  const [openPassengerModal, setOpenPassagerModal] = React.useState(false)
  const [viewVehicle, setViewVehicle] = React.useState(true)
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
                    <StyledTableCell align="left">MARCA/MODELO</StyledTableCell>
                    <StyledTableCell align="left">MATRICULA</StyledTableCell>
                    <StyledTableCell align="left">VALOR</StyledTableCell>
                    <StyledTableCell align="left">Ações</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {passengers.map(passenger => (
                    <StyledTableRow key={passenger.name}>
                      <StyledTableCell component="th" scope="row">
                        {passenger.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {passenger.departure} - {passenger.return}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {passenger.departureTime}-{passenger.returnTime}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {passenger.amount}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item>
                            <Button
                              size="small"
                              color="primary"
                              variant="outlined"
                              startIcon={<EditIcon />}
                              onClick={() => setOpenPassagerModal(true)}
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
        open={openPassengerModal}
        onClose={() => setOpenPassagerModal(false)}
      >
        <DialogContent>
          <DialogContentText id="reservation">
            <VehicleData />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
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
        </DialogActions>
      </SimpleDialog>
    </Box>
  )
}

export default VehiclePreview
