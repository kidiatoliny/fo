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
  Slide,
  Switch
} from '@material-ui/core'
import SimpleDialog from '~/components/Dialogs/SimpleDialog'
import { EditIcon } from '~/components/Icons'
import React from 'react'

import PassengerData from '../Step2/PassengerData'

const PassengerPreview: React.FC = () => {
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
  const [viewPassenger, setViewPassenger] = React.useState(true)
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
                    <StyledTableCell align="left">
                      PARTIDA/RETORNO
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      HORA PARTIDA/RETORNO
                    </StyledTableCell>
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
        title="Editar Passageiro"
        open={openPassengerModal}
        onClose={() => setOpenPassagerModal(false)}
      >
        <DialogContent>
          <DialogContentText id="reservation">
            <PassengerData />
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

export default PassengerPreview
