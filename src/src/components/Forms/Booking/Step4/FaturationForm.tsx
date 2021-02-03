import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Switch,
  Typography
} from '@material-ui/core'
import { LocationIcon, MailIcon, PhoneIcon } from '~/src/components/Icons'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import React, { useState } from 'react'
import {
  AiOutlineClockCircle,
  AiOutlineFileSearch,
  AiOutlineUserAdd
} from 'react-icons/ai'
import { FiHash, FiPhone, FiSmartphone, FiUsers } from 'react-icons/fi'
import { HiOutlineHashtag, HiOutlineMail } from 'react-icons/hi'
import { IoCarSport } from 'react-icons/io5'

const FaturationForm: React.FC = () => {
  const [isFaturation, setIsFaturation] = useState(true)
  return (
    <Box marginBottom={4}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Box mt={2}>
            <Grid item container>
              <Typography variant="h6">Dados de Faturacao</Typography>
              <Switch
                checked={isFaturation}
                onChange={() => setIsFaturation(prev => !prev)}
              />
            </Grid>
          </Box>
        </Grid>
        {isFaturation && (
          <>
            {' '}
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label=" Nome Completo"
                  name="first_name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiUsers />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label=" N.I.F"
                  name="last_name"
                  size="small"
                  fullWidth
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
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="E-mail"
                  name="first_name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Contato"
                  name="last_name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Morada"
                  name="last_name"
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default FaturationForm
