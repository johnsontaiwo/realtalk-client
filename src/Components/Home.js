import React, { Component } from 'react';
import User from './User'
import { fetchUser } from '../Actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import usersContainer from './UserContainer'
import ArticleContainer from './ArticlesContainer'
import Routes from '../Routes/routes'
import { Link } from 'react-router-dom'

class Home extends Component {
  
  render() {
    const { user } = this.props
    return (
      <div>
       <p>Welcome to Real Talk where real issues of life are discussed, click on any article below to read and leave a comment</p>
       <ArticleContainer />
       </div>
    )
  }
}
      
      
       

export default Home
  
