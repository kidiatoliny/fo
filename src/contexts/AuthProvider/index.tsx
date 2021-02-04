import { ApplicationState } from '~/store'
import { selectors, actions } from '~/store/ducks/auth'
import { Login } from '~/store/ducks/auth/types'
import React, { createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContextData } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()

  const login = (payload: Login) => dispatch(actions.loginRequest(payload))

  const logout = () => dispatch(actions.logout())
  return (
    <AuthContext.Provider
      value={{
        login,
        logout
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
