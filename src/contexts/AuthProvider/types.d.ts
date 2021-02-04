export interface AuthContextData {
  login: (payload: Login) => void
  logout: () => void
}
