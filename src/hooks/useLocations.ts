import { actions, selectors } from '~/store/ducks/locations'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from '../store'
export const useLocations = () => {
  const dispatch = useDispatch()
  /**
   * Locations Selectors
   */
  const locations = useSelector((state: ApplicationState) =>
    selectors.getLocation(state.location)
  )

  const isLoading = useSelector((state: ApplicationState) =>
    selectors.isLoading(state.location)
  )
  /**
   * Locations methods
   */
  const getLocations = () => dispatch(actions.locationRequest())

  return { locations, isLoading, getLocations }
}
