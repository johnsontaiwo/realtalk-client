import React, { Component } from 'react';
import usersContainer from './UserContainer';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from './Article'
import { bindActionCreators } from 'redux';
import { fetchUser } from  '../Actions/userActions'

class User extends Component {

  // componentDidMount() {
  //   //debugger
  //   this.props.fetchUser(this.props.user)
  // }
 
  render() {
    
    
    const  { user }  = this.props
    const allArticles = this.props.user.article && this.props.user.article.map(article => {
      return <Article key={article.id} article={article} userId={user.id} />
    })

    return (
      <div>
        <h5> Signed in as: { user.name } </h5>
        
      </div>
    );
  }
}; 
        

const mapStateToProps = state => {
  return ({
    user: state.users.current,
  })
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {fetchUser }, dispatch);
  }


export default connect(mapStateToProps, mapDispatchToProps)(User)