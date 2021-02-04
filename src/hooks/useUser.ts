import { ApplicationState } from '~/store'
import { getProfile } from '~/store/ducks/user/selectors'
import { useSelector } from 'react-redux'
export const useUser = () => {
  const profile = useSelector((state: ApplicationState) =>
    getProfile(state.user)
  )
  return { profile }
}
