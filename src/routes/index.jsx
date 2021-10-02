import React from 'react'
import Search from "../pages/search"
import Patient from '../pages/patient'
import Calender from '../pages/calender'
import Manage from '../pages/manage'
import Settings from '../pages/settings'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/patients' component={Patient} />
            <Route path='/calender' component={Calender} />
            <Route path='/manage' component={Manage} />
            <Route path='/settings' component={Settings} />
        </Switch>
    )
}

export default Routes
