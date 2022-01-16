import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from '../components/Home/Home'

function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/' >
<Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
