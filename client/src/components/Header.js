import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions'

class Header extends Component {
  componentDidMount() {
    this.props.fetchUser()
    console.log(this.props.currentUser)
  }
  renderContent() {
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        )
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderContent()}
        </ul>
      </div>
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
