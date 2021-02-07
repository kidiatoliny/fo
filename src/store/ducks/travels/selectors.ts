import { TravelState } from './types'

export const getDeparture = (state: TravelState) => state.departure.departure

export const getReturn = (state: TravelState) => state.return.return

export const getDepartureSchedule = (state: TravelState) =>
  state.departure.departure?.schedule

export const getReturnSchedule = (state: TravelState) =>
  state.departure.return?.schedule

export const getRouteFares = (state: TravelState) => state.departure.route_fare

export const getPasengerFares = (state: TravelState) =>
  state.departure.route_fare?.filter(fare => fare.fare_type === 'PAX')

export const getVehiclesFare = (state: TravelState) =>
  state.departure.route_fare?.filter(fare => fare.fare_type === 'VEHICLE')
export const passengersFareTax = (state: TravelState) =>
  state.departure.fare_tax
    ?.filter(tax => tax.fare_type === 'PAX')
    .map(tax => ({
      id: tax.id
    }))

export const vehicleFareTax = (state: TravelState) =>
  state.departure.fare_tax
    ?.filter(tax => tax.fare_type === 'VEHICLE')
    .map(tax => ({
      id: tax.id
    }))

export const error = (state: TravelState) => state.error
export const isLoading = (state: TravelState) => state.loading
