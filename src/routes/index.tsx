import * as page from '~/pages'
import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Route from './Route'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={page.Login} />
        <Route path="/dashboard" component={page.Home} isPrivate />
        <Route path="/reservation" component={page.Reservation} isPrivate />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
