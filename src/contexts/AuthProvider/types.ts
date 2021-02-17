import { Login, UserRole } from '~/store/ducks/auth/types'
import { HttpResponseError } from '~/types'
export interface AuthContextData {
  login: (payload: Login) => void
  logout: () => void
  error: HttpResponseError | null
  isLoading: boolean
  isLogdIn: boolean
  role: UserRole
  isTokenExpired: boolean
  token: string | null
  isAdmin: () => boolean
}
