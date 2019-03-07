import React, { Component }  from 'react'
import { fetchUsers } from '../Actions/userActions'
import { connect } from 'react-redux';
import User from './User'

 
 class usersContainer extends Component {


componentDidMount() {
  this.props.fetchUsers()
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