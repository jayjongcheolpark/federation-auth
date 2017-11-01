import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Landing from './Landing'
import DashBoard from './DashBoard'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App