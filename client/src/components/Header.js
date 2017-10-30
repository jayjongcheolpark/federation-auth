import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchUser } from '../actions'

const Div = styled.div`
  background: palevioletred;
`

const Ul = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 10px;
`

const A = styled.a`
  color: white;
  text-decoration: none;
`

class Header extends Component {
  componentDidMount() {
    this.props.fetchUser()
    console.log(this.props.currentUser)
  }
  renderContent() {
        return (
          <li>
            <A href="/auth/google">Login With Google</A>
          </li>
        )
  }

  render () {
    return (
      <Div>
        <Ul>
          {this.renderContent()}
        </Ul>
      </Div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(fetchUser())
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
