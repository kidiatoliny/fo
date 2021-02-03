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
  createStyles
} from '@material-ui/core'
import { DeleteForeverIcon, EditIcon } from '~/src/components/Icons'
import React from 'react'
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

  return (
    <Box mb={5}>
      <Grid container spacing={4} direction="column">
        <Box>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>
            Passageiros
          </Typography>
        </Box>
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
                    <StyledTableCell align="center">
                      {passenger.departure} - {passenger.return}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {passenger.departureTime}-{passenger.returnTime}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {passenger.amount}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <Button
                            size="small"
                            color="primary"
                            variant="outlined"
                            startIcon={<EditIcon />}
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
      </Grid>
    </Box>
  )
}

export default PassengerPreview
