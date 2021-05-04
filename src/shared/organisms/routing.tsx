import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"


export const Routing = ({}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'}>
          Home
        </Route>
      </Switch>
    </BrowserRouter>
  )
}