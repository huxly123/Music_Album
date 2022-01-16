import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Edit from "../components/Login/Edit";
import Login from "../components/Login/Login";
import Single from "../components/Single/Single";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/album/:_id" exact>
          <Single />
        </Route>
        <Route path="/login" exact>
          <Login />
              </Route>
              <Route path='/edit' exact >
                  <Edit/>
              </Route>
      </Switch>
    </div>
  );
}

export default Routes;
