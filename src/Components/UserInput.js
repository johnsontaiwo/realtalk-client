import React, { Component } from 'react';

class UserRegistration extends Component {

  state = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }

  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({
     password: event.target.value
    })
  }
handleNameChange = event => {
    event.preventDefault();
    this.setState({
     name:  event.target.value
    })
  }
     
handleEmailChange = event => {
    event.preventDefault();
    this.setState({
     email: event.target.value
    })
  }
     

handleOnSubmit = event => {
  event.preventDefault()
    //this.props.addArticle(this.state.title)
    this.setState({
      name: '',
      email: '',
      password: ''
    })

}

  render() {
    return(
     <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)} >
      
        <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.handleNameChange(event)}/>
        <input type="text" placeholder="email address" value={this.state.email} onChange={(event) => this.handleEmailChange(event)}/>
        <input type="password" placeholder="password" onChange={(event) => this.handlePasswordChange(event)}/>
        <input type="submit" />
       
      </form>
     </div>
      )
  }
}

export default UserRegistration