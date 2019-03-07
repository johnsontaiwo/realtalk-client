import  React, { Component }  from 'react';
import usersContainer from './UserContainer';


class User extends Component {
 
  render() {
    const  user  = this.props
    return (
      <div>
        <h5>Signed in as
          { user.email }
        </h5>
        
      </div>
    );
  }

}; 


export default User