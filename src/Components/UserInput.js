import React, { Component } from 'react';

class UserRegistration extends Component {

  state = {
    id: 0,
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
      
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
        <input type="text" placeholder="email address" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
        <input type="password" placeholder="password" name="password" onChange={(event) => this.handleChange(event)}/>
        <input type="submit" />
       
      </form>
     </div>
      )
  }
}

export default UserRegistration