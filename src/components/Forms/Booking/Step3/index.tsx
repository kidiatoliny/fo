import React from 'react'

import PassengerPreview from './PassengerPreview'
import ReservationOwnerPreview from './ReservationOwnerPreview'
import VehiclePreview from './VehiclePreview'

const Step3: React.FC = () => {
  return (
    <>
      <ReservationOwnerPreview />
      <PassengerPreview />
      <VehiclePreview />
    </>
  )
}

export default Step3
