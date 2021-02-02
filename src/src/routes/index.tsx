import * as page from '~/src/pages'
import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={page.Home} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
