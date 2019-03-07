import React, { Component } from 'react';
import { signupUser } from '../Actions/userActions'
import {  connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { browserHistory, withRouter }  from 'react-router';
import { Form } from 'react-bootstrap';
import { Button, FormControl, FormGroup } from 'react-bootstrap'

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
      <form className="userInfo" onSubmit={(event) => this.handleOnSubmit(event)} >
        <input className="userName" type="text" placeholder="Name" name="name" value={ name } onChange={(event) => this.handleChange(event)}/> <br />
        <input className="userEmail" type="text" placeholder="email address" name="email" value={ email } onChange={(event) => this.handleChange(event)}/> <br />
        <input className="userPassword" type="password" placeholder="password" name="password" value={ password } onChange={(event) => this.handleChange(event)}/> <br />
        <input type="submit" />
      </form>
      </div>
      )
    }
  }


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { signupUser }, dispatch);
}

export default withRouter(connect(undefined, mapDispatchToProps)(UserRegistration))
       
      







// //<Form className="signUpPage" onSubmit={(event) => this.handleOnSubmit(event)}>
//        <Form.Group controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Name" name="name" value={ name } onChange={(event) => this.handleChange(event)} />
//        </Form.Group>

//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" name="email" value={ email } onChange={(event) => this.handleChange(event)} />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" name="password" value={ password } onChange={(event) => this.handleChange(event)}/>
//       </Form.Group>
      
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
// </Form>;