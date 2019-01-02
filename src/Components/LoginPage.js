import React, { Component } from 'react'
import { authenticate } from '../Actions/userActions'
import { loginUser } from '../Actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, withRouter }  from 'react-router';

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

  // else {
  //    window.alert("sorry something went wrong,please try again")
  //      }
    
    
   // if ( this.props.getUser(this.state)) {
   //  this.props.history.push('/')
   //  console.log(`You're logged in as ${this.state.email}`)
   // } else {
   //  console.log("sorry something went wrong,please try again")
   
    // this.setState({
    //   email: '',
    //   password: ''
    // })
 }


  render() {
    const { email, password } = this.state
    return(
  
     <div>
     
      <form onSubmit={(event) => this.handleOnSubmit(event)} >
      <p> Please Log in </p>
      
        <input type="text" placeholder="email address" name="email" value={ email } onChange={(event) => this.handleChange(event)}/>
        <input type="password" placeholder="password" name="password" value={ password } onChange={(event) => this.handleChange(event)}/>
        <button type="submit" placeholder="Login"> Log in </button>
       
      </form>
     </div>
      
      )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {loginUser }, dispatch);
};


export default withRouter(connect(undefined, mapDispatchToProps)(LoginPage))