import React, { Component } from 'react'
import { connect } from 'react-redux'

class DashBoard extends Component {
  render () {
    if (this.props.user) {
      return (
        <div>
          <img src={this.props.user.photo} alt="profile" />
          <div>Name: {this.props.user.name}</div>
          <div>Email: {this.props.user.email}</div>
        </div>
      )
    } else {
      return (
        <div>
          DashBoard
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return { user : state.user.user }
}

export default connect(mapStateToProps)(DashBoard)