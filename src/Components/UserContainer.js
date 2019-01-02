import React, { Component }  from 'react'
import { createUser } from '../Actions/actionCreators'
import { fetchUsers } from '../Actions/userActions'
import { connect } from 'react-redux';

 
 class usersContainer extends Component {


componentDidMount() {
  this.props.fetchUsers()
 }

  render() {

    return(
      <div>
       <p> User container </p>
      </div>
      )
  }
 }

const mapStateToProps = state => {
  return ({
    users: state.users
  })
}
 
 export default connect(mapStateToProps, { fetchUsers })(usersContainer)