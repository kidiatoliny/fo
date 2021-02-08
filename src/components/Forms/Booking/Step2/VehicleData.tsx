import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import { VehicleIcon } from '~/components/Icons'
import { useBooking } from '~/contexts/BookingProvider'
import { useTravel } from '~/hooks/useTravel'
import { BookingVehicle } from '~/store/ducks/bookings/types'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useCallback, useEffect, useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoCarSport } from 'react-icons/io5'

const VehicleData: React.FC = () => {
  const { vehicleCount, handleAddVehicle, vehicles } = useBooking()
  const { vehicleFares } = useTravel()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(vehicleCount)
  }, [])
  const [vehicle, setVehicle] = useState<BookingVehicle>({} as BookingVehicle)
  const [disabledAddButton, setDisabledAddButton] = useState(true)
  const handleChange = useCallback(
    (value: string, name: string) => {
      setVehicle({
        ...vehicle,
        [name]: value
      } as BookingVehicle)
    },

    [vehicle]
  )

  const handleVehicle = () => {
    setVehicle({} as BookingVehicle)
    handleAddVehicle(vehicle)
  }
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item>
              <Typography variant="h6">
                Veículo {total - vehicleCount + 1}-{total}
              </Typography>
              {JSON.stringify(vehicles)}
            </Grid>
          </Box>
        </Grid>
        <Grid item container spacing={4} wrap="wrap">
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              placeholder="eg. Toyota"
              variant="outlined"
              label=" Marca"
              name="brand"
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
                    <IoCarSport />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              label=" Modelo"
              placeholder="eg. Hilux"
              disabled={!vehicle.brand}
              name="model"
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
                    <IoCarSport />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth size="small" variant="outlined">
              <InputLabel htmlFor="destination">Tipo de veículo</InputLabel>
              <Field
                disabled={!vehicle.brand}
                component={Select}
                label=" Tipo de veiculo"
                name="fare_id"
                inputProps={{
                  id: 'destination'
                }}
                onChange={(event: React.ChangeEvent<{ value: string }>) =>
                  handleChange(event.target.value, 'fare_id')
                }
                displayEmpty
                value={'' || vehicle.fare_id}
                startAdornment={
                  <InputAdornment position="start">
                    <IoCarSport />
                  </InputAdornment>
                }
              >
                {vehicleFares?.map(fare => (
                  <MenuItem value={fare.id} key={fare.id}>
                    {fare.fare_description}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              onFocus={() => setDisabledAddButton(false)}
              component={TextField}
              variant="outlined"
              label=" Matricula"
              disabled={!vehicle.fare_id}
              placeholder="xx-xx-xx"
              name="register_id"
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
                    <FiUsers />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
        <Grid item container justify="flex-end">
          <Grid item xs={12} md={6} lg={3}>
            <Box mt={4}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                endIcon={<VehicleIcon />}
                onClick={handleVehicle}
                disabled={disabledAddButton}
              >
                Adicionar Veiculo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default VehicleData
