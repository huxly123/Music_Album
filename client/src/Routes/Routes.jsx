import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from '../components/Home/Home'
import Single from '../components/Single/Single'


function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/' >
<Home/>
                </Route>
                <Route path='/album/:id' >
<Single/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
