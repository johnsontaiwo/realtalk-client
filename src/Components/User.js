import React, { Component } from 'react';
import usersContainer from './UserContainer';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from './Article'
import { bindActionCreators } from 'redux';
import { fetchUser, updateUser } from  '../Actions/userActions'

class User extends Component {
 
state = {

  editable: false
}

componentDidMount() {
  //debugger
    this.props.fetchUser(this.props.user.id)
  }
  
   handleEdit = (event) => {
    console.log('Are you sure')

   }

  

  render() {
    
    
    const  { user }  = this.props
    //debugger
    // const allArticles = this.props.user.article && this.props.user.article.map(article => {
    //   return <Article key={article.id} article={article} userId={user.id} />
    // })

    return (
      <div className="userProfilePage">
        <h5> Name: { user.name } </h5> <button onClick=<input type="text" defaultValue={ user.name }/>>Edit</button>
        <h5> Email: { user.email } </h5>
        <h5> Gender: { user.gender } </h5>
        <h5> Date of Birth: { user.date_of_birth } </h5>
        
        
      </div>
    );
  }
}; 
        

const mapStateToProps = state => {
  return ({
    user: state.users.current
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchUser, updateUser}, dispatch);
     
  


export default connect(mapStateToProps, mapDispatchToProps)(User)