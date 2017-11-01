import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import btn_google_signin from '../images/btn_google_signin.png'
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

const Img = styled.img`
  width: 120px;
  height: 30px;
`

class Header extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  renderContent() {
    if (this.props.currentUser) {
      return (
        <li>
          <A href="/api/logout">Logout</A>
        </li>
      )
    } else {
      return (
        <li>
          <A href="/auth/google"><Img src={btn_google_signin} alt="google_signin" /></A>
        </li>
      )
    }
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
    currentUser: state.user.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
