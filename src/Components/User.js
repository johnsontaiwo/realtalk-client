import React, { Component } from 'react';
import usersContainer from './UserContainer';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from './Article'

class User extends Component {
 
  render() {
    
    //debugger
    const  { user }  = this.props
    const allArticles = this.props.user.article && this.props.user.article.map(article => {
      return <Article key={article.id} article={article} userId={user.id} />
    })

    return (
      <div>
        <h5> Signed in as: { user.name } </h5>
        <h5>Articles: { allArticles }</h5>
      </div>
    );
  }
}; 
        

const mapStateToProps = state => {
  return ({
    user: state.users.current,
  })
}


export default connect(mapStateToProps)(User)