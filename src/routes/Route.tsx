import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  component: React.FC
  isPrivate?: boolean
}

const RouteWrapper: React.FC<Props> = ({
  isPrivate,
  component: Component,
  ...restProps
}) => {
  const auth = localStorage.getItem('token')
  if (!auth && isPrivate) {
    return <Redirect to="/" />
  }

  return <Route {...restProps} component={Component} />
}

export default RouteWrapper
