import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Menus from '../menus/menus'


export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/' component={Menus} />
    <Redirect from='*' to='/' />
  </Router>
)
