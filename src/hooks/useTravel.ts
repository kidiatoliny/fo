import { useBooking } from '~/contexts/BookingProvider'
import { ApplicationState } from '~/store'
import { actions, selectors } from '~/store/ducks/travels'
import { SearchTravel } from '~/store/ducks/travels/types'
import { useDispatch, useSelector } from 'react-redux'
export const useTravel = () => {
  const dispatch = useDispatch()
  const { isReturnedTravel, passengers, vehicles } = useBooking()

  const getTravel = (payload: SearchTravel) => {
    return dispatch(actions.travelRequest(payload))
  }

  const departureTravel = useSelector((state: ApplicationState) =>
    selectors.getDeparture(state.travel)
  )
  const returnTravel = useSelector((state: ApplicationState) =>
    selectors.getDeparture(state.travel)
  )

  const departureSchedules = useSelector((state: ApplicationState) =>
    selectors.getDepartureSchedule(state.travel)
  )

  const returnSchedules = useSelector((state: ApplicationState) =>
    selectors.getReturnSchedule(state.travel)
  )

  const routeFares = useSelector((state: ApplicationState) =>
    selectors.getRouteFares(state.travel)
  )

  const error = useSelector((state: ApplicationState) =>
    selectors.error(state.travel)
  )
  const passengerFares = useSelector((state: ApplicationState) =>
    selectors.getPasengerFares(state.travel)
  )

  const vehicleFares = useSelector((state: ApplicationState) =>
    selectors.getVehiclesFare(state.travel)
  )

  const passengerFareTax = useSelector((state: ApplicationState) =>
    selectors.passengersFareTax(state.travel)
  )

  const vehicleFareTax = useSelector((state: ApplicationState) =>
    selectors.vehicleFareTax(state.travel)
  )

  const departureSchedulesById = (id: number) =>
    departureSchedules?.find(schedule => schedule.id === id)

  const returnSchedulesById = (id: number) =>
    departureSchedules?.find(schedule => schedule.id === id)

  const getPassengerFareById = (id: number) =>
    passengerFares?.find(schedule => schedule.id === id)

  const getVehicleFareById = (id: number) =>
    vehicleFares?.find(schedule => schedule.id === id)

  const getPassengerFareAmount = (id: number) => {
    const rsp = getPassengerFareById(id)
    if (rsp) {
      return parseInt(rsp.amount)
    }
  }

  const getPassengerFareAmountPerTravel = (id: number) => {
    let amount: number | undefined
    const parcialAmount = getPassengerFareAmount(id)
    if (isReturnedTravel) {
      amount = parcialAmount && parcialAmount * 2
    } else {
      amount = parcialAmount
    }
    return {
      amount
    }
  }

  const getVehicleFareAmount = (id: number) => {
    const rsp = getVehicleFareById(id)
    if (rsp) {
      return parseInt(rsp.amount)
    }
  }
  const getVehicleFareAmountPerTravel = (id: number) => {
    let amount: number | undefined
    const parcialAmount = getVehicleFareAmount(id)
    if (isReturnedTravel) {
      amount = parcialAmount && parcialAmount * 2
    } else {
      amount = parcialAmount
    }
    return {
      amount
    }
  }
  const passengersFareTotal = () => {
    const total: number[] = []
    passengers.map(p =>
      total.push(getPassengerFareAmountPerTravel(p.fare_id).amount as number)
    )

    return total.reduce(
      (accumulator, currenValue) => accumulator + currenValue,
      0
    )
  }
  const vehiclesFareTotal = () => {
    const total: number[] = []
    vehicles.map(v =>
      total.push(getVehicleFareAmountPerTravel(v.fare_id).amount as number)
    )

    return total.reduce(
      (accumulator, currenValue) => accumulator + currenValue,
      0
    )
  }

  const totalFare = () => vehiclesFareTotal() + passengersFareTotal()
  return {
    getTravel,
    error,
    departureSchedules,
    returnSchedules,
    routeFares,
    returnTravel,
    departureTravel,
    passengerFares,
    passengerFareTax,
    vehicleFareTax,
    vehicleFares,
    departureSchedulesById,
    returnSchedulesById,
    getPassengerFareById,
    getVehicleFareById,
    getPassengerFareAmountPerTravel,
    getVehicleFareAmountPerTravel,
    passengersFareTotal,
    vehiclesFareTotal,
    totalFare
  }
}
