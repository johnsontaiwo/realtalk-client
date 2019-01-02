import React, { Component } from 'react';
import { signupUser } from '../Actions/userActions'
import {  connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { browserHistory, withRouter }  from 'react-router';

class UserRegistration extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  
handleChange = event => {
  const { name, value } = event.target
      event.preventDefault();
    this.setState({
     [name]: value
    })
  }
     

     

handleOnSubmit = event => {
  event.preventDefault()
    const user = this.state
   if (user) {this.props.signupUser(user, () => this.props.history.push('/'))}
    // this.setState( {
    //   name: '',
    //   email: '',
    //   password: ''
    // })
    //return user
    }



  render() {
    const { name, email, password } = this.state
    return(
     <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)} >
      
        <input type="text" placeholder="Name" name="name" value={ name } onChange={(event) => this.handleChange(event)}/>
        <input type="text" placeholder="email address" name="email" value={ email } onChange={(event) => this.handleChange(event)}/>
        <input type="password" placeholder="password" name="password" value={ password } onChange={(event) => this.handleChange(event)}/>
        <input type="submit" />
       
      </form>
     </div>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { signupUser }, dispatch);
};

export default withRouter(connect(undefined, mapDispatchToProps)(UserRegistration))

