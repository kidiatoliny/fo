import { ApplicationState } from '~/store'
import { selectors, actions } from '~/store/ducks/user'
import { useSelector, useDispatch } from 'react-redux'
export const useUser = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state: ApplicationState) =>
    selectors.getProfile(state.user)
  )
  const isLoading = useSelector((state: ApplicationState) =>
    selectors.isLoading(state.user)
  )

  const getProfile = () => dispatch(actions.userProfileRequest())
  return { profile, isLoading, getProfile }
}
