import React, { Component } from 'react'
import User from './User'
import { authenticate } from '../Actions/userActions'
import { loginUser } from '../Actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, withRouter, Link }  from 'react-router-dom';
import App from '../App.js'

class LoginPage extends Component {

  state = {
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
     if (user.email && user.password) {
      this.props.loginUser(user, () => this.props.history.push('/'))}
    else {
       window.alert("sorry something went wrong,please try again")
      }
  }
  
  render() {
    const { email, password } = this.state
    return(
     <div>
      <form className="userInfo" onSubmit={(event) => this.handleOnSubmit(event)} >
        <p> Please login below or<Link to='/userRegistration' className="userRegistration">Sign Up</Link> to read or comment on our latest articles</p>
        <input className="userEmail" type="text" placeholder="email address" name="email" value={ email } onChange={(event) => this.handleChange(event)}/> < br/>
        <input className="userPassword" type="password" placeholder="password" name="password" value={ password } onChange={(event) => this.handleChange(event)}/> < br/>
        <button type="submit" placeholder="Login"> Log in </button> |
          
      </form>
       
     </div>
    )
  }
}
  

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {loginUser}, dispatch);
  }
 

export default withRouter(connect(undefined, mapDispatchToProps)(LoginPage))
       



       
      
  
     

