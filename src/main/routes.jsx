// Default imports
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Custom imports
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billing-cycle/billing-cycle'

// Componente funcional
export default props => (
    <Router history={ hashHistory }>
        <Route path='/' component={ Dashboard } />
        <Route path='/billingCycles' component={ BillingCycle } />
        <Redirect from='*' to='/' />
    </Router>
)