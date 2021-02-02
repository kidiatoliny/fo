import * as page from '~/src/pages'
import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={page.Login} />
        <Route path="/dashboard" component={page.Home} />
        <Route path="/reservation" component={page.Reservation} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
