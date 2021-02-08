import { ApplicationState } from '~/store'
import { actions, selectors } from '~/store/ducks/travels'
import { SearchTravel } from '~/store/ducks/travels/types'
import { useDispatch, useSelector } from 'react-redux'
export const useTravel = () => {
  const dispatch = useDispatch()

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
    vehicleFares
  }
}