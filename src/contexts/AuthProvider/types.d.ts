import { Login, Role } from '~/store/ducks/auth/types'

interface AuthContextData {
  isLogdin: boolean
  isLoading: boolean
  role: Role
  isTokenExpired: boolean
  login: (payload: Login) => void
  logout: () => void
}
