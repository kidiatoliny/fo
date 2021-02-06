import { ApplicationState } from '~/store'
import { selectors, actions } from '~/store/ducks/auth'
import { Login } from '~/store/ducks/auth/types'
import React, { createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContextData } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()
  const error = useSelector((state: ApplicationState) =>
    selectors.getError(state.auth)
  )
  const isLoading = useSelector((state: ApplicationState) =>
    selectors.isLoading(state.auth)
  )
  const isLogdIn = useSelector((state: ApplicationState) =>
    selectors.isLogdin(state.auth)
  )
  const role = useSelector((state: ApplicationState) =>
    selectors.getRole(state.auth)
  )
  const isTokenExpired = useSelector((state: ApplicationState) =>
    selectors.isTokenExpired(state.auth)
  )
  const token = useSelector((state: ApplicationState) =>
    selectors.getToken(state.auth)
  )
  const login = (payload: Login) => {
    dispatch(actions.loginRequest(payload))
  }

  const logout = () => {
    dispatch(actions.logout())
  }

  return (
    <AuthContext.Provider
      value={{
        error,
        login,
        logout,
        isLoading,
        isLogdIn,
        role,
        isTokenExpired,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
