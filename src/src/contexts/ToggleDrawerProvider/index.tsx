import React, { createContext, useContext, useState } from 'react'

interface ContextData {
  toggle: boolean
  handleToggle: () => void
}

const ToggleDrawerContext = createContext<ContextData>({} as ContextData)
export const ToggleDrawerProvider: React.FC = ({ children }) => {
  const [toggle, setToogle] = useState(false)

  const handleToggle = () => setToogle(prevState => !prevState)
  return (
    <ToggleDrawerContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ToggleDrawerContext.Provider>
  )
}

export function useToggleDrawer() {
  const context = useContext(ToggleDrawerContext)
  return context
}
