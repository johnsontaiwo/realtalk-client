import React, { Component } from 'react';
import usersContainer from './UserContainer';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'

class User extends Component {
 
  render() {
    const  { user }  = this.props
    return (
      <div>
        <h5> Signed in as: { user.name } </h5>
      </div>
    );
  }
}; 
        

const mapStateToProps = state => {
  return ({
    user: state.users.current
  })
}


export default connect(mapStateToProps)(User)