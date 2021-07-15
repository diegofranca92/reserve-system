import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Screens } from './screens'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/reservas' exact component={Screens.Reserves} />
        <Route path='/' exact component={Screens.Home} />
      </Switch>
    </Router>
  )
}
