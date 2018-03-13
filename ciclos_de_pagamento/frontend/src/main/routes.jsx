import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DashboardNoRedux from '../components/dashboardNoRedux/dashboardNoRedux'
import Dashboard from '../components/dashboard/dashboard'
import BillingCycle from '../components/billingCycle/billingCycle'

export default props => (

    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/noRedux' component={DashboardNoRedux} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Route from='*' to='/' />
    </Router>

)