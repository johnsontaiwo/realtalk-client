import React, { Component }  from 'react'
import { fetchUsers } from '../Actions/userActions'
import { connect } from 'react-redux';
import User from './User'
import Home from './Home'


 
 class usersContainer extends Component {


componentDidMount() {
  debugger
  this.props.fetchUser()
 }

  render() {

    return(
      <div>
       <User user={this.props.user} /> 
      </div>
      )
  }
 }

const mapStateToProps = state => {
  return ({
    user: state.users.current
  })
}
 
 export default connect(mapStateToProps, { fetchUsers })(usersContainer)