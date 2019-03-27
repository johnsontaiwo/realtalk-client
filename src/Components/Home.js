import React, { Component } from 'react';
import User from './User'
import { fetchUser } from '../Actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import usersContainer from './UserContainer'

class Home extends Component {
  
  

  render() {
    const { user } = this.props
    return (
      <div>
      <p>Welcome to Real Talk where real issues of life are discussed</p>
      <User />
      </div>
    )
  }
}

export default Home