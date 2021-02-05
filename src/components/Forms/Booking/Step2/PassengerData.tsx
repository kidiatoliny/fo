import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import { UsersIcon } from '~/components/Icons'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React from 'react'
import { AiOutlineFileSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineHashtag } from 'react-icons/hi'
const PassengerData: React.FC = () => {
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item>
              <Typography variant="h6">Passageiro 1/1</Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Nome"
              name="first_name"
              size="small"
              fullWidth
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
              variant="outlined"
              label=" Apelido"
              name="last_name"
              size="small"
              fullWidth
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
          <Grid container spacing={1}>
            <Grid item sm={6} md={4}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="destination">
                  Tipo de Passageiro
                </InputLabel>
                <Field
                  component={Select}
                  label=" Tipo de Passageiro"
                  name="destination"
                  inputProps={{
                    id: 'destination'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineUserAdd />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={10}>SA/SV</MenuItem>
                  <MenuItem value={20}>SV/SA</MenuItem>
                </Field>
              </FormControl>
            </Grid>
            <Grid item sm={6} md={4}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="destination">Tipo documento</InputLabel>
                <Field
                  component={Select}
                  label="Tipo de documento"
                  name="destination"
                  inputProps={{
                    id: 'destination'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <AiOutlineFileSearch />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={10}>SA/SV</MenuItem>
                  <MenuItem value={20}>SV/SA</MenuItem>
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Field
                component={TextField}
                variant="outlined"
                label=" Numero de documento"
                name="last_name"
                size="small"
                fullWidth
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
    </Box>
  )
}

export default PassengerData
