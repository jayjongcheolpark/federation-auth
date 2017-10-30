import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './Header'
import Landing from './Landing'
import DashBoard from './DashBoard'

const Div = styled.div`
  background: papayawhip
`

class App extends Component {
  render () {
    return (
      <Div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </BrowserRouter>
      </Div>
    )
  }
}

export default App