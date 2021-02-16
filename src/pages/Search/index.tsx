import {
  Card,
  CardContent,
  Icon,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  InputAdornment,
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  LinearProgress,
  Box
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import notFound from '~/assets/notFound.svg'
import { SearchIcon } from '~/components/Icons'
import Layout from '~/components/Layout'
import SnackBar from '~/components/SnackBar'
import { useModal } from '~/hooks/useModal'
import { useSearch } from '~/hooks/useSearch'
import { Field, Form, Formik } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useState } from 'react'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minHeight: '100vh'
    },
    img: {
      width: theme.spacing(30),
      marginTop: theme.spacing(10),
      alignSelf: 'center'
    }
  })
)

const Search: React.FC = () => {
  const classes = useStyles()
  const { open, closeModal, openModal } = useModal()
  const { searchData, isSearchLoading, searchRequest, error } = useSearch()

  React.useEffect(() => {
    error?.code === 404 && openModal()
  }, [error])
  return (
    <Layout>
      <Card raised className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <Icon>
                <SearchIcon />
              </Icon>
            </Avatar>
          }
          title={<Typography variant="h5">Procurar</Typography>}
        />
        <CardContent>
          <Formik
            initialValues={{ searchType: 'booking-owner-name', searchTerm: '' }}
            enableReinitialize
            onSubmit={(values, helpers) => {
              helpers.resetForm()
              searchRequest(values)
            }}
          >
            <Form>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="search_for">Filtro de Procura</InputLabel>
                    <Field
                      component={Select}
                      labelId="search_for"
                      label="Filtro de Procura"
                      id="demo-simple-select"
                      name="searchType"
                    >
                      <MenuItem value="booking-owner-name">
                        Titular de Reserva
                      </MenuItem>
                      <MenuItem value="passenger-name">
                        Nome de Passageiro
                      </MenuItem>
                      <MenuItem value="passenger-document">
                        Documento de Passageiro
                      </MenuItem>
                      <MenuItem value="booking-reference">
                        Número de Booking
                      </MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    id="search"
                    label="Procurar"
                    name="searchTerm"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                {isSearchLoading ? (
                  <Grid item xs={12} md={10}>
                    <LinearProgress />
                  </Grid>
                ) : (
                  ''
                )}
                <Grid item xs={12}>
                  <Button type="submit"></Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
          {searchData.headers !== undefined && (
            <Grid container justify="center">
              <Grid item xs={12} md={10}>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>{searchData?.headers.id}</TableCell>
                          <TableCell>{searchData.headers.name}</TableCell>
                          <TableCell>
                            {searchData.headers.document_type}
                          </TableCell>
                          <TableCell>
                            {searchData.headers.document_data}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {searchData.rows.map(row => (
                          <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.document_type}</TableCell>
                            <TableCell>{row.document_data}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          )}
          {error.code === 404 && (
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <img src={notFound} alt="notFound" className={classes.img} />
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
      <SnackBar
        open={open}
        onClose={closeModal}
        message="Nenhum Registo encontrado"
      />
    </Layout>
  )
}

export default Search
