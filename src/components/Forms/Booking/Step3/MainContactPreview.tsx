import { Box, Typography, Grid, Icon } from '@material-ui/core'
import { UserIcon, MailIcon, MobileIcon, PhoneIcon } from '~/components/Icons'
import { BookingMainContact } from '~/store/ducks/bookings/types'
import React from 'react'

interface MainContactPreviewProps {
  mainContact: BookingMainContact
}
const MainContactPreview: React.FC<MainContactPreviewProps> = ({
  mainContact
}) => {
  return (
    <Box>
      <Typography variant="h6" style={{ marginBottom: '1rem' }}>
        Titular da Reserva
      </Typography>
      <Grid container spacing={1} md={6}>
        <Grid item container alignItems="center" md={6}>
          <Icon>
            <UserIcon />
          </Icon>
          <Typography style={{ marginLeft: '1rem' }}>
            {mainContact.first_name} {mainContact.last_name}
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: 4 }} md={6}>
          <Icon>
            <MailIcon />
          </Icon>
          <Typography style={{ marginLeft: '1rem' }}>
            {mainContact.email}
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: 4 }} md={6}>
          <Icon>
            <MobileIcon />
          </Icon>
          <Typography style={{ marginLeft: '1rem' }}>
            {mainContact.mobile}
          </Typography>
        </Grid>
        {mainContact.phone && (
          <Grid item container style={{ marginTop: 4 }} md={6}>
            <Icon>
              <PhoneIcon />
            </Icon>
            <Typography style={{ marginLeft: '1rem' }}>
              {mainContact.phone}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default MainContactPreview
